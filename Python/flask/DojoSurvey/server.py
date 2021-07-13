from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe'
# our index route will handle rendering our form
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def create_user():
    print("Got Post Info")
    # Here we add two properties to session to store the name and email
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['lang']
    session['comments'] = request.form['comments']
    return redirect('/results')
# adding this method
@app.route('/results')
def show_user():
    return render_template('show.html', name_on_template=session['username'], email_on_template=session['useremail'])
if __name__ == "__main__":
    app.run(debug=True)