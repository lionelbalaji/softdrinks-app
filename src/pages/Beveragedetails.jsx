import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../pages/Dta'
import '../css files/beveragedetails.css'
const Beveragedetails = () => {
  const{id}=useParams()
  const[beverage,setBeverage]=useState({})

  useEffect(()=>{
           const selectedbeverage=data.find((item)=>item.id===parseInt(id))
           setBeverage(selectedbeverage)
  },[id])

  return (
    <div className='container'>
      <div className="buttons">
          <Link className='btn btn-sm  button-1' to='/'>Back Home</Link>
        </div>
      <div className="heading">
      <h3>{beverage.name}</h3>
      </div>
       <div className="details">
       <div className="juice-image-con">
              <img src={beverage.image} alt="image" className='juice-image'/>
              </div>
                <div className="juice-details" >
                <strong><span>Name:</span>{beverage.name}</strong>
                <strong><span>Category:</span>{beverage.type}</strong>
                <strong><span>Instruction:</span>{beverage.instruction}</strong>
                <strong><span>Ingredients:</span>{beverage.ingredients}</strong>
                </div>
       </div>
    </div>
  )
}

export default Beveragedetails