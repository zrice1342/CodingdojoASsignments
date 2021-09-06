import React , {useState} from 'react';

const functionalmenu = (props)=>{
    const [numMeals,setNumMeals] = useState(props.numMealsServed)
    const dosomething = ()=> {
        console.log(`you just got served ${props,nameOfDish}`)
    }

    return {
    <>
        <div className="menuItem">
            <h3> Dish Name: {props.nameOfDish} </h3>
            <h5> Price: {props.price }</h5>
            <div> Description: {props.children} </div>
            <p>Number of this particular meal served so far: {numMeals} </p>
            <p><button onClick = {doSomething}>Serve Meal!</button></p>
        </div>
    </>
    }
    );
};

export default functionalmenu;