from flask import Flask
from .modles.Ninja import Ninja
from .modles.dojos import Dojo
app = Flask(__name__)
app.secret_key = "shhhhhh"