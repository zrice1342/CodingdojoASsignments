from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.modles.user import User

@app.route('/a')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def create_user():
    print("Got Post Info")
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['lang']
    session['comment'] = request.form['comments']
    data = {"name": request.form['name'],
    'location': request.form['location'],
    'language': request.form['lang'],
    'comment': request.form['comments']}
    if not User.validate_user(request.form):
        return redirect('/a')
    User.saveuser(data)
    return redirect('/results')

@app.route('/results')
def show_user():
    return render_template('show.html', name_on_template=session['username'], email_on_template=session['useremail'])


if __name__ == "__main__":
    app.run(debug=True)