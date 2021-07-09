from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def index():
    return render_template("index.html", phrase="hello", times=5)	# notice the 2 new named arguments!






@app.route('/hello')
def hello_world2():
    print("this is a print statement")
    return "Hello World Tool"

@app.route('/hello/<name>') # for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'
def hello(name):
    print(name)
    return "Hello, " + name



@app.route('/user/<string:username>/<int:id>')
def show(username,id):
    print(username,id)
    return"username " + username+ "id: "+ str(id)    


















if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    THIS SHOULD BE LAST THING IN SERVER FILE
    app.run(debug=True)    # Run the app in debug mode.