import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";


const Edit = () => {
    const { idParam } = useParams();
    const history = useHistory(); //this is for redirecting when we submit the form


    const [petInfo, setPetInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${idParam}`)
            .then(res=>{
                console.log("response when trying to get one pet-->", res)
                setPetInfo(res.data.results)
            })
            .catch(err=>console.log("errrrrrrr ", err))
    },[])


    const changeHandler = (e)=>{
        console.log("changin something")
        console.log(e.target.name, e.target.value)
            setPetInfo({ 
                ...petInfo,
                [e.target.name]:e.target.value
            })

        }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${idParam}`, petInfo )
            .then(res=>{
                console.log("response afer put request", res)
                history.push(`/pets/${idParam}`);
            })
            .catch(err=> console.log("errrrr, ", err))
    }


    return (
        <div>
            <h1>Edit pet with this id: </h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange = {changeHandler} type="text" name="name" id="" className="form-control" value = {petInfo.name} />
                    {/* <p className="text-danger">{validationErrors.name? validationErrors.name.message: ""}</p> */}
                </div>
                <div className="form-group">
                    <label htmlFor="">Type of pet:</label>
                    <input onChange = {changeHandler} type="text" name="type" id="" className="form-control" value = {petInfo.type} />
                    {/* <p className="text-danger">{validationErrors.numProjects? validationErrors.numProjects.message:""}</p> */}

                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input onChange = {changeHandler} type="text" name="description" id="" className="form-control" value = {petInfo.description}/>
                    {/* <p className="text-danger">{validationErrors.graduationDate? validationErrors.graduationDate.message: ""}</p> */}

                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 1</label>
                    <input onChange = {changeHandler} type="text" name="skillOne" id="" className="form-control" value = {petInfo.skillOne}/>
                    {/* <p className="text-danger">{validationErrors.graduationDate? validationErrors.graduationDate.message: ""}</p> */}

                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 2</label>
                    <input onChange = {changeHandler} type="text" name="skillTwo" id="" className="form-control" value = {petInfo.skillTwo}/>
                    {/* <p className="text-danger">{validationErrors.graduationDate? validationErrors.graduationDate.message: ""}</p> */}

                </div>
                <div className="form-group">
                    <label htmlFor="">Skill 3</label>
                    <input onChange = {changeHandler} type="text" name="skillThree" id="" className="form-control" value = {petInfo.skillThree}/>
                    {/* <p className="text-danger">{validationErrors.graduationDate? validationErrors.graduationDate.message: ""}</p> */}

                </div>

                <input className= "btn btn-primary"type="submit" value="Update Pet!" />

            </form>
        </div>
    );
};


export default Edit;