from flask_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']

    @classmethod
    def get_all_users(cls):
        query = "SELECT * FROM users"
        results = connectToMySQL('users_schema').query_db(query)
        # Create an empty list to append our instances of friends
        users = []
        # Iterate over the db results and create instances of friends with cls.
        print("results")
        print(results)
        for user in results:
            users.append(cls(user))
        return users
    def get_one_user(cls,data):
        query = "select * from users where id = %(id)s;"
        results = connectToMySQL('users_schema').query_db(query,data)
        print (results)
        return cls(results[0])
    # ... other class methods
    # class method to save our friend to the database
    @classmethod
    def save(cls, data ):
        query = "INSERT INTO users ( first_name , last_name , email , created_at, updated_at ) VALUES ( %(fname)s , %(lname)s , %(email)s , NOW() , NOW() );"
        # data is a dictionary that will be passed into the save method from server.py
        results = connectToMySQL('users_schema').query_db( query, data ) 
        print(results)
    @classmethod
    def update(cls,data):
        query = "Update users set first_name =  %(fname)s , last_name = %(lname)s , email = %(email)s , updated_at = NOW() Where id = %(id)s"
        results = connectToMySQL('users_schema').query_db( query, data ) 
        print(results)
    @classmethod
    def delete(cls,data):
        query = " Delete from users where id = %(id)s"
        results = connectToMySQL('users_schema').query_db( query, data ) 
        print (results)