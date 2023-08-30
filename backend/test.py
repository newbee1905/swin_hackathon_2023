import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Fetch the service account key JSON file contents
cred = credentials.Certificate('swin-hack-2023-firebase-adminsdk-9pify-a9f6e4af08.json')

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://swin-hack-2023-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

db = firestore.client()
doc_ref = db.collection("users").document("alovelace")
doc_ref.set({"first": "Ada", "last": "Lovelace", "born": 1815})