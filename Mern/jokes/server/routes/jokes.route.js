const JokeController = require("../controllers/jokes.controller");


module.exports = app => {
    app.get("/api", JokeController.helloworld);
    app.get("/api/Jokes", JokeController.findAllJokes);
    app.post("/api/Jokes", JokeController.createNewJoke);
    app.get("/api/Jokes/random", JokeController.findRandomJoke)
    app.get("/api/Jokes/:id", JokeController.findOneJoke);
    app.put("/api/Jokes/:id", JokeController.updateExistingJoke);
    app.delete("/api/Jokes/:id", JokeController.deleteJoke);}