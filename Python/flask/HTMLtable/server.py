from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
	# notice the 2 new named argume


@app.route("/")
def dist():
    users = [
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'John', 'last_name' : 'Supsupin'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'},
        {'first_name' : 'Zack', 'last_name' : 'Rice'},
        {'first_name' : 'mike', 'last_name' : 'like'},
        {'first_name' : 'miles', 'last_name' : 'smiles'}
        ]
    return render_template("index.html",users = users)





if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    THIS SHOULD BE LAST THING IN SERVER FILE
    app.run(debug=True)    # Run the app in debug mode.