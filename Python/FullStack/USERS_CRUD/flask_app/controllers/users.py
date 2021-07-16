from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.modles.user import User


@app.route('/users')
def index():
    users = User.get_all_users()
    print(users)
    return render_template("show.html",listuser = users)

@app.route('/users/<int:id>')
def one_user(id):
    data = {
        "id" :id 
    }
    print(data)
    user = User.get_one_user(User,data)
    return render_template("showone.html",user = user)

@app.route("/users/new")
def form():
    return render_template("index.html")

@app.route("/users/enternew", methods=["POST"])
def create_User():
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    # We pass the data dictionary into the save method from the Friend class.
    User.save(data)
    # Don't forget to redirect after saving to the database.
    return redirect('/users')


@app.route("/users/<int:id>/edit")
def edit(id):
    data = {
        "id" :id 
    }
    print(data)
    user = User.get_one_user(User,data)
    return render_template("edit.html",user = user)

@app.route("/users/edituser", methods=["POST"])
def edit_user():
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.
    data = {
        "id": request.form["id"],
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "email" : request.form["email"]
    }
    # We pass the data dictionary into the save method from the Friend class.
    User.update(data)
    # Don't forget to redirect after saving to the database.
    return redirect('/users')


@app.route("/users/delete/<int:id>")
def deleteuser(id):
    data = {"id" : id}
    User.delete(data)
    return redirect("/users")

if __name__ == "__main__":
    app.run(debug=True)