from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash 

class User:
    def __init__(self,data):
        self.id = data["id"]
        self.location = data["location"]
        self.language = data["language"]
        self.name = data["name"]
        self.comment = data["comment"]
    
    @staticmethod
    def validate_user(user):
        is_valid = True
        if len(user['name']) < 1:
            flash("name must be at least 1 character")
            is_valid = False
        if len(user['comment']) < 1:
            flash("comment must be at least 1 character")
            is_valid = False
        return is_valid

    @classmethod
    def saveuser(cls, data ):
        query = "INSERT INTO userinfo (name , location ,language,comment, created_at, updated_at ) VALUES ( %(name)s , %(location)s , %(language)s, %(comment)s, NOW() , NOW() );"
        results = connectToMySQL('dojo_survey_schema').query_db( query, data ) 
        print(results)

    # @classmethod
    # def saveninja(cls, data ):
    #     query = "INSERT INTO dojo ( name, created_at, updated_at ) VALUES (%(names)s , NOW() , NOW() );"
    #     # data is a dictionary that will be passed into the save method from server.py
    #     results = connectToMySQL('mydb').query_db( query, data ) 
    #     print(results)

