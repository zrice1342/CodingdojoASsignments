import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from './componets/ProductForm';
import ProductList from './componets/ProductList';
const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
    return (
        <div>
           <ProductForm/>
           <hr/>
           {loaded && <ProductList product={product}/>}
        </div>
    )
}
    
export default Main;