from os import environ 

SECRET_KEY = environ.get('SECRET_KEY')
API_KEY = environ.get('API_KEY')

FIREBASE_API_KEY = environ.get('FIREBASE_API_KEY')
FIREBASE_PROJECT_ID = environ.get('FIREBASE_PROJECT_ID')
FIREBASE_AUTH_SIGN_IN_OPTIONS = 'google'
SECRET_KEY = environ.get('SECRET_KEY')