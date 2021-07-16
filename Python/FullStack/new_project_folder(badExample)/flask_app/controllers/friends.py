from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.modles.friend import Freind
@app.route('/')
def index():
    friends = friend.get_all_friends()
    print(friends)
    return render_template("index.html", all_friends = friends)
@app.route("/<int:id>")
def one_frined(id):
    data = {
        "id":id
    }
    friend = Friend
    return render_template("index.html")            


# relevant code snippet from server.py
@app.route("/bop", methods=["POST"])
def create_friend():
    # First we make a data dictionary from our request.form coming from our template.
    # The keys in data need to line up exactly with the variables in our query string.
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "occ" : request.form["occ"]
    }
    # We pass the data dictionary into the save method from the Friend class.
    Friend.save(data)
    # Don't forget to redirect after saving to the database.
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)