from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.modles.Ninja import Ninja
from flask_app.modles.dojos import Dojo


@app.route('/dojos')
def index():
    dojos = Dojo.get_all_dojos()
    print(dojos)
    return render_template("showdojos.html",listdojo = dojos)

@app.route("/enternewdojo", methods=["POST"])
def create_Dojo():
    data = {
        "name": request.form["name"],
    }
    Dojo.savedojo(data)
    return redirect('/dojos')

@app.route("/dojos/<int:id>")
def ninjas(id):
    data = {"id":id}
    print(data)
    ninjas = Dojo.get_one_dojo(data)
    return render_template("showonedojo.html",users = ninjas)

@app.route("/newninja")
def ninjaform():
    dojos = Dojo.get_all_dojos()
    return render_template("new.html",dojos=dojos)

@app.route("/enternewninja", methods=["POST"])
def create_User():
    data = {
        "fname": request.form["fname"],
        "lname" : request.form["lname"],
        "age" : request.form["age"],
        "dojos_id" :int(request.form["dojo"])
    }
    print("ninjas data")
    print(data)
    Ninja.saveninja(data)
    return redirect('/dojos')


if __name__ == "__main__":
    app.run(debug=True)