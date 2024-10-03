import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


 


const Home = (props) => {
 
  const [Allproducts, setAllproducts] = useState([]);
console.log(Allproducts)
    let getData=async()=>{
        let ans=await fetch(`https://dummyjson.com/products?skip=0&limit=0`)
        let data= await ans.json()
        // console.log(data)
        setAllproducts(data.products)

        }
useEffect(()=>{
  getData()
},[])

function handleAdd(ans){
console.log(ans)
let updatedObj={...ans,quantity:1}
props.getCartItem(updatedObj)
}
    
  return (
    
    

    <div className='row d-flex justify-content-center gap-2 '>
 
  {Allproducts.map((ele,index)=>{

return  <div key={ele.id} className="card" style={{width: '18rem'}}>
 
<img src={ele.thumbnail} className="card-img-top" alt="..." />
<div className="card-body">
<h5 style={{height:"50px"}}  key={index}>{ele.title}</h5>
  
  
  <p className="card-text">Price:{ele.price}$</p>
 
  <Link to="/single" state={ele} className="btn btn-primary ">View details</Link>
  <button  onClick={()=>handleAdd(ele)} className='btn btn-success cart'>Add to cart</button>
 
  
</div>
</div>




})}

    </div>
  )
}

export default Home
