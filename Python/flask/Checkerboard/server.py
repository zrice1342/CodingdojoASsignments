from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
	# notice the 2 new named argume

@app.route("/",defaults = {'x':8,'y':8})
@app.route("/<int:x>",defaults = {'y':8})
@app.route("/<int:x>/<int:y>")
def index(x,y):
    return render_template("index.html",x = int(y/2),y = int(x/2))


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    THIS SHOULD BE LAST THING IN SERVER FILE
    app.run(debug=True)    # Run the app in debug mode.