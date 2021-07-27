from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import app
from flask_bcrypt import Bcrypt   
from flask import flash
import re 
bcrypt = Bcrypt(app)
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 


class User:
    def __init__(self,data):
        self.id = data['id']
        self.email= data['email']
        self.password = data['password']
        self.first = data['first']
        self.last = data['last']


    @classmethod
    def save(cls,data):
        query = "INSERT INTO user (first,last,email, password,created_at,updated_at) VALUES (%(first)s,%(last)s, %(email)s, %(password)s ,NOW(),NOW());"
        results = connectToMySQL('login').query_db(query,data)
        return results

    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM user WHERE email = %(email)s;"
        result = connectToMySQL("login").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])

    @staticmethod
    def validate_register(data):
        va = True
        return va