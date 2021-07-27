from flask import Flask
from .modles.user import User
app = Flask(__name__)
app.secret_key = "shhhhhh"