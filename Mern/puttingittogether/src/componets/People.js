import React , {useState} from 'react';


const People = (props) => {
    const [age,setAge] = useState(props.numAge)
    const doSomething = ()=>{
        setAge(age+1)
    }
    return (
        <>
        <div className="personCard">
            <h3>{props.fname} , {props.lname}</h3>
            <h5>Age: {age}</h5>
            <div>Hair Color: {props.hair}</div>
            <p><button onClick = {doSomething}>Birthday</button></p>
        </div>

        
    
    </>
    );
};

export default People;