
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Search = () => {
    const [categories, setCategories] = useState([])
    const [formInfo, setFormInfo] = useState({
        category:"people",
        id:""
    })
    const history = useHistory();
    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
            .then(res=>{
                console.log("res", res)
                console.log(Object.keys(res.data))
                setCategories(Object.keys(res.data))
            })
            .catch(err=> console.log(err))
    },[])

    const changeHandler = (e) =>{
        console.log(e.target.value)
        console.log(e.target.name)
        setFormInfo({
            ...formInfo,[e.target.name]:e.target.value
        })
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("form submitted!!")
        console.log(formInfo)
        history.push(`/${formInfo.category}/${formInfo.id}`) //similar to saying "redirect("/test")"
    }

    return (
        <div>
            <form onSubmit = {submitHandler} className="form-inline row g-3 align-items-center" action="">
               <div className="col-auto">
                    <select onChange = {(e)=>changeHandler(e)} name="category" id="" className="form-select">
                        {
                            categories.map((cat,i)=>{
                                return <option key= {i} value={cat}>{cat}</option>
                            })
                        }
                    </select>
               </div>
               <div className="col-auto">
                    <input onChange = {(e)=>changeHandler(e)} type="number" name="id" id="" className="form-control" />
                   

               </div>
               <div className="col-auto">
                    <input className = "btn btn-success" type="submit" value="Search" />
               </div>
            </form>

           
        </div>
    );
};



export default Search;