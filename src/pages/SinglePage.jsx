import React from 'react'
import { useLocation } from 'react-router-dom'

const SinglePage = () => {
  let loaction = useLocation()
  console.log(loaction.state)

  return (
    <div className='row mt-3'>
      <div className="col-md-6  d-flex justify-content-center">
        <img src={loaction.state.thumbnail} alt="" />
      </div>
      <div className="col-md-6 p-4">
        <h3>Title- {loaction.state.title}</h3>
        <h4>Brand- {loaction.state.brand}</h4>
        <h3>Catergory: {loaction.state.category}</h3>
        <p>Price:  {loaction.state.price}</p>
        <p>Rating:  {loaction.state.rating}</p>
        <p>Stok:  {loaction.state.stock}</p>
        <h6>Warranty:  {loaction.state.
          warrantyInformation
        }</h6>
        <p>Description:  {loaction.state.description}</p>
       

        <button className='btn btn bg-info mt-3'>Add to cart</button>

      </div>
      <div className="row mt-5">
        <div className='col-md-6 p-4'>

          

{loaction.state.reviews.map((ele,index)=>{
          return <div className='review' key={index}><h3>{ele.reviewerName}</h3>
          <p>-{ele.comment}</p>
          
          
          </div> 
          
        })}
        
            
            
          
        </div>
        


        <div className='col-md-6 p-4'>
          <h3 className='mt-3'>ReturnPolicy:{loaction.state.returnPolicy}</h3>
          <h4 className='mt-3'>AvailabilityStatus-{loaction.state.availabilityStatus
          }
          </h4>
          
        </div>


      </div>
    </div>


  )


}

export default SinglePage
