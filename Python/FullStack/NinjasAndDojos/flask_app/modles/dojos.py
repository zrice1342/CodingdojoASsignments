from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.modles.Ninja import Ninja
class Dojo:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']

    @classmethod
    def get_all_dojos(cls):
        query = "SELECT name,id FROM dojos"
        results = connectToMySQL('mydb').query_db(query)
        dojos = []
        print("results")
        print(results)
        for dojo in results:
            dojos.append(cls(dojo))
        return dojos
    @classmethod
    def get_one_dojo(cls,data):
        query = "select dojos.name, dojos.id, first_name,last_name, age from dojos join ninjas on ninjas.dojos_id = dojos.id where dojos.id = %(id)s;"
        results = connectToMySQL('mydb').query_db(query,data)
        # Create an empty list to append our instances of friends
        ninjas = []
        print("QQQQQQQQQQQ")
        print(data)
        # Iterate over the db results and create instances of friends with cls.
        print("results")
        print(results)
        for n in results:
            ninjas.append(Ninja(n))
        return ninjas


    @classmethod
    def savedojo(cls, data ):
        query = "INSERT INTO dojos ( name, created_at, updated_at ) VALUES (%(name)s , NOW() , NOW() );"
        results = connectToMySQL('mydb').query_db( query, data ) 
        print(results)

