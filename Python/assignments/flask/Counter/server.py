from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
app.secret_key = 'zw\xdba\x88\xf4\xa5\xf1\x9a\xb9\r\x0cA\xdd\xa3\x94'

@app.route("/")
def count():
    counter = 0
    print("is this thing on")
    if 'counter' in session:
        counter = session['counter'] + 1 
        session['counter'] = counter
    else:
        session['counter'] = 0
        print("key 'key_name' does NOT exist")
    return render_template("index.html", times = counter)


@app.route("/destroy_session")
def clearsesh():
    if 'counter' in session:
        session.clear()
    else:
        print("key 'key_nanm' does not exist")
    return 'cleared'

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    THIS SHOULD BE LAST THING IN SERVER FILE
    app.run(debug=True)    # Run the app in debug mode.