const PetController = require("../controllers/pet.controller");


module.exports = app => {
    app.get("/api/pets", PetController.findAllPets);
    app.post("/api/pets", PetController.createNewPet);
    app.get("/api/pets/:id", PetController.findOnePet);
    app.put("/api/pets/:id", PetController.updateExistingPet);
    app.delete("/api/pets/:id", PetController.deletePet);
}