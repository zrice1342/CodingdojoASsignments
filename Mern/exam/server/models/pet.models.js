const mongoose = require('mongoose');
 

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    type: {
        type: String,
        required:[true, "Pet Type is required!"],
        minlength: [3, "Pet Type must be at least 3 characters long"]
    },
    description: {
        type: String,
        required:[true, "Pet Description is required!"],
        minlength: [3, "Pet Description must be at least 3 characters long"]
    },
    skillOne: {
        type: String,
        required:[false, "Pet Description is required!"]
    },
    skillTwo: {
        type: String,
        required:[false, "Pet Description is required!"]
    },
    skillThree: {
        type: String,
        required:[false, "Pet Description is required!"]
    },


})

//register the above code at a table in mongodb
const Pet = mongoose.model("Pet", PetSchema )

module.exports = Pet;