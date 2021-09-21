import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '/Users/zackrice/Desktop/CodingDojo/CodingdojoASsignments/Mern/ProductManager/client/src/componets/ProductForm';
import ProductList from '/Users/zackrice/Desktop/CodingDojo/CodingdojoASsignments/Mern/ProductManager/client/src/componets/ProductList';
    
const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    const removeFromDom = ProductID => {
        setProducts(products.filter(product => product._id !== ProductID));
    }
    
    return (
        <div>
           <ProductForm/>
           <hr/>
           {loaded && <ProductList product={products} removeFromDom={removeFromDom}/>}
        </div>
    );
}
    
export default Main;