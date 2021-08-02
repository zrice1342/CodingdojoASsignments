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

    @staticmethod
    def validate_user(data):
        is_valid = True
        if len(data['username']) < 2:
            flash("usernamename must be longer than 2 characters")
            is_valid = False
        if len(data['email']) < 3:
            flash("email must be longer than 3 characters")
            is_valid = False
        if len(data['password']) < 8:
            flash("password must be longer than 8 characters")
            is_valid = False
        if data['password'] != data['conf_password']:
            flash("passwords dont match")
            is_valid = False
        if not EMAIL_REGEX.match(data['email']):
            flash("email is not valid")
            is_valid = False
        return is_valid


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