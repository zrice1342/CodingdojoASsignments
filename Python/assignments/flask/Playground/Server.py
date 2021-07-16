from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
	# notice the 2 new named argume

@app.route("/play",defaults = {'x':3})
@app.route("/play/<int:x>",defaults = {'color': "blue"})
@app.route("/play/<int:x>/<color>")
def index(x,color):
    return render_template("index.html", times = x,c = color)
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    THIS SHOULD BE LAST THING IN SERVER FILE
    app.run(debug=True)    # Run the app in debug mode.