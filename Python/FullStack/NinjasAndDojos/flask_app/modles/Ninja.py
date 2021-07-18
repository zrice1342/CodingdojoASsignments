from flask_app.config.mysqlconnection import connectToMySQL

class Ninja:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        # self.dojo_id = data['dojos_id']

    @classmethod
    def get_all_Ninjas(cls):
        query = "SELECT first_name,last_name,age FROM ninjas where dojo_id = %(dojo_id)s"
        results = connectToMySQL('mydb').query_db(query)
        # Create an empty list to append our instances of friends
        ninjas = []
        # Iterate over the db results and create instances of friends with cls.
        print("results")
        print(results)
        for ninja in results:
            ninjas.append(cls(ninja))
        return ninjas
    

    @classmethod
    def saveninja(cls, data ):
        query = "INSERT INTO ninjas ( first_name , last_name , age ,dojos_id, created_at, updated_at ) VALUES ( %(fname)s , %(lname)s , %(age)s, %(dojos_id)s, NOW() , NOW() );"
        results = connectToMySQL('mydb').query_db( query, data ) 
        print(results)

    # @classmethod
    # def saveninja(cls, data ):
    #     query = "INSERT INTO dojo ( name, created_at, updated_at ) VALUES (%(names)s , NOW() , NOW() );"
    #     # data is a dictionary that will be passed into the save method from server.py
    #     results = connectToMySQL('mydb').query_db( query, data ) 
    #     print(results)

