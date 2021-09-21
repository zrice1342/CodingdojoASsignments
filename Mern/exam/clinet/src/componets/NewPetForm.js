
import axios from 'axios';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

const NewPetForm = () => {

    const history = useHistory(); //this is for redirecting when we submit the form

    let [formInfo, setFormInfo] = useState({
        name: null,
        type: null,
        description: null,
        skillOne: null,
        skillTwo: null,
        skillThree: null
    })

    let [validationErrors, setValidationErrors] = useState({})


    const changeHandler = (e)=>{
        console.log("changin something")
        console.log(e.target.name, e.target.value)

            setFormInfo({ 
                ...formInfo,
                [e.target.name]:e.target.value
            })

        }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("submitted with this info-->", formInfo)
        axios.post("http://localhost:8000/api/pets", formInfo)
            .then(res=>{
                console.log("response after submitting post request-->", res)
                if(res.data.err){ //if there is validation errors
                    //do not redirect if there is validation errors
                    //store the errors object from the back end into a state variabel so i can display the state variable info on the page
                    setValidationErrors(res.data.err.errors)

                }else{ //if the form is filled out properly
                    history.push("/"); //this redirects to home if form is submitting properly

                }
            })
            .catch(err=>console.log("errrrrr-->", err))
    }

    return (
        <div>
            <h3>Add a new pet </h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange = {changeHandler} type="text" name="name" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.name? validationErrors.name.message: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Type of pet:</label>
                    <input onChange = {changeHandler} type="text" name="type" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.type? validationErrors.type.message:""}</p>

                </div>
                <div className="form-group">
                    <label htmlFor="">Pet Description:</label>
                    <input onChange = {changeHandler} type="text" name="description" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.description? validationErrors.description.message: ""}</p>
                </div>
                <h3> Skills (optional)</h3>
                <div className="form-group">
                    <label htmlFor="">Skill 1:</label>
                    <input onChange = {changeHandler} type="text" name="skillOne" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.skillOne? validationErrors.graduationDate.skillOne: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 2:</label>
                    <input onChange = {changeHandler} type="text" name="skillTwo" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.skillOne? validationErrors.graduationDate.skillOne: ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 3:</label>
                    <input onChange = {changeHandler} type="text" name="skillThree" id="" className="form-control" />
                    <p className="text-danger">{validationErrors.skillOne? validationErrors.graduationDate.skillOne: ""}</p>
                </div>

                {/* Veteran checkbox */}
                <input className= "btn btn-primary"type="submit" value="Add Pet!" />

            </form>
        </div>
    );
};


export default NewPetForm;