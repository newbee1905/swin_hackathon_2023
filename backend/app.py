import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from flask import Flask, request, redirect, jsonify
from flask_firebase import FirebaseAuth
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
import base64
from PIL import Image
import io
import numpy as np


from models import Account

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


@app.route("/run", methods=['POST'])
@login_required
def run() -> str:
    if request.get_json() is not None:
        data = request.get_json()

        err = ""

        image_arr = np.array([])

        image = data.get('image')
        if image is None:
            err += "Image is missing\n"
        else:
            base64_string = image.split(',')[1]
            image_bytes = base64.b64decode(base64_string)
            _image = Image.open(io.BytesIO(image_bytes))
            image_arr = np.array(_image)

        image_mode = data.get('image_mode')
        if image_mode is None:
            err += "Image Mode is missing\n"

        prompt = data.get('prompt')
        if prompt is None:
            prompt = ""

        images_number = data.get('images_number')
        if images_number is None:
            err += "Images Number is missing\n"

        alignment_strength = data.get('alignment_strength')
        if alignment_strength is None:
            err += "Alignment Strength is missing\n"

        tile_refinement = data.get('tile_refinement')
        if tile_refinement is None:
            tile_refinement = False

        print (image_arr, image_mode, prompt, images_number, alignment_strength, tile_refinement)

        if len(err) == 0:
            return jsonify({'test': 'hello'}), 200
        else:
            return jsonify({'err': err}), 400
    else:
        return jsonify({'err': 'please send request as json'})
