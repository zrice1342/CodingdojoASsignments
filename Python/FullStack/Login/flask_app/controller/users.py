from flask import Flask,flash,redirect, request,session,render_template
from flask_app import app
from flask_bcrypt import Bcrypt   
from flask_app.model.user import User
bcrypt = Bcrypt(app)

@app.route('/')
def login():
    return render_template("index.html")



@app.route('/register', methods=['POST'])
def register():
    # validate the form here ...
    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)
    data = {
        "first": request.form['first'],
        "last": request.form['last'],
        "email": request.form['email'],
        "password" : pw_hash
    }
    print(data)
    user_id = User.save(data)
    session['user_id'] = user_id
    return redirect('/')


@app.route('/login', methods=['POST'])
def log():
    # see if the username provided exists in the database
    data = { "email" : request.form["email"] }
    user_in_db = User.get_by_email(data)
    # user is not registered in the db
    if not user_in_db:
        flash("Invalid Email/Password")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        # if we get False after checking the password
        flash("Invalid Email/Password")
        return redirect('/')
    # if the passwords matched, we set the user_id into session
    session['user_id'] = user_in_db.id
    # never render on a post!!!
    return redirect("/dashboard")