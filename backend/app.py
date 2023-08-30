import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from flask import Flask, request, redirect
from flask_firebase import FirebaseAuth
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
import json

app = Flask(__name__)

app.debug = False  # to disable local testing
app.config.from_pyfile('settings.py')

auth = FirebaseAuth(app)
login_manager = LoginManager(app)

# Fetch the service account key JSON file contents
cred = credentials.Certificate(
    'swin-hack-2023-firebase-adminsdk-9pify-a9f6e4af08.json')

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://swin-hack-2023-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

app.register_blueprint(auth.blueprint, url_prefix='/auth')

class Account:
    def __init__(self, firebase_user_id):
        self.account_id = 0
        self.firebase_user_id = firebase_user_id
        self.email = ""
        self.email_verified = False
        self.name = ""
        self.photo_url = ""
        self.is_active = True
        self.is_authenticated = True

    def get_id(self):
        return self.firebase_user_id

    def __repr__(self):
        return str(dict(firebase_user_id=self.firebase_user_id, email=self.email, name=self.name, photo_url=self.photo_url))

    @staticmethod
    def from_dict(source):
        print(source)
        print(source['firebase_user_id'])
        account = Account(source['firebase_user_id'])    
        account.email = source['email']
        account.email_verified = source['email_verified']
        account.name = source['name']
        account.photo_url = source['photo_url']
        return account

with app.app_context():
    ref = db.reference("users")

@auth.production_loader
def production_sign_in(token):
    # account = Account.query.filter_by(firebase_user_id=token['sub']).one_or_none()
    account_data = ref.child(token['sub']).get()
    if account_data is None:
        account = Account(token['sub'])
        account.email = token['email']
        account.email_verified = token['email_verified']
        account.name = token.get('name')
        account.photo_url = token.get('picture')
        ref.child(token['sub']).set(vars(account))
    else:
        account = Account.from_dict(account_data)
    login_user(account)


@auth.unloader
def sign_out():
    logout_user()


@login_manager.user_loader
def load_user(account_id):
    return Account.from_dict(ref.child(account_id).get())


@login_manager.unauthorized_handler
def authentication_required():
    return redirect(auth.url_for('widget', mode='select', next=request.url))


@app.route("/")
@login_required
def index():
    return f"<p>Hello, {current_user.name}!</p><img src='{current_user.photo_url}' />"
