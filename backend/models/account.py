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
