

const Cart= (props) => {

  console.log(props.CartArr)

  let sum=0;
  for(let value of props.CartArr){
    sum=sum+value.price
  }

  function increment(obj,index){
    console.log(obj)
    console.log(index)
    let updatedObj={
      ...obj,
      quantity:obj.quantity+1,
      price:obj.price+(obj.price/obj.quantity)
    }
let updatedArr=[...props.CartArr]
updatedArr[index]=updatedObj
props.setCartArr(updatedArr)



  }
  function handleDelete(ele,index){
    let copyArr=[...props.CartArr]
    copyArr.splice(index,1);
    props.setCartArr(copyArr)
  }
  
  

  function decrement(obj,index){
    console.log(obj)
    console.log(index)
    if(obj.quantity<=1){return}
    else{
      let updatedObj={
        ...obj,
        quantity:obj.quantity-1,
        price:obj.price-(obj.price/obj.quantity)
      }
      let updatedArr=[...props.CartArr]
      updatedArr[index]=updatedObj
      props.setCartArr( updatedArr)

  }
}


  return (

    <div>
      <table className="table text-center align-middle col-md">
        <thead>
          <tr >
            <th scope="col">Sno</th>
            <th scope="col">Products</th>
            <th scope="col">Title</th>
            <th scope="col">Quentity</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.CartArr.map((ele, index) => {
            return <tr key={ele.id}>
              <td >
                {index + 1}
              </td>


              <td >
                <img src={ele.thumbnail} alt="" style={{ width: "150px" }} />
              </td>
              <td >
                {ele.title}
              </td>
              <td >
               <button onClick={()=>decrement(ele,index)} className='btn btn-info'>-</button>  {ele.quantity}
               <button onClick={()=>increment(ele,index)} className='btn btn-info'>+</button>
              </td>
              <td >
               ${Math.ceil(ele.price)} 
              </td>
              <td>
                <button onClick={()=>handleDelete(ele,index)} className='btn btn-danger'>Delete</button>
              </td>

            </tr>




          })}
        </tbody>
      </table>

<h2 className="text-center mt-3">Total=${Math.ceil(sum)}</h2>
    </div>
  )
}

export default Cart
