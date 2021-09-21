const Pet = require("../models/pet.models");



module.exports.findAllPets = (req,res)=>{
    Pet.find()
        .then(allNinjas=>{
            res.json({results: allNinjas})
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.createNewPet = (req,res)=>{
    Pet.create(req.body)
        .then(newNinjaObj=>{
            res.json({results: newNinjaObj })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findOnePet = (req,res)=>{
    
    Pet.findOne({_id:req.params.id})
        .then(foundNinja=>{
            res.json({results: foundNinja })
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id }, //find the objects whose _id == req.params.id
        req.body, //req.body is the information from the form to update with
        { new: true, runValidators: true } //new:true means return the newly updated info. 
    )
        .then(updatedNinja => {
            res.json({ results: updatedNinja })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deletePet = (req,res)=>{
    Pet.deleteOne({_id: req.params.id})
        .then(deletedNinja =>{
            res.json({results: deletedNinja})
        })
        .catch(err=>{
            res.json({err:err})
        })
}