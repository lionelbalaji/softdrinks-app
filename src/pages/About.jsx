import React from 'react'
import { Link } from 'react-router-dom'
import '../css files/about.css'
const About = () => {
 
  return (
    <div className='container'>
      <div className="head-cont">
       <h1>About Us</h1>
      </div>
      <div className="about">
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur 
        excepturi provident deleniti asperiores explicabo fugiat obcaecati neque id fuga 
        nihil pariatur nulla reiciendis modi quam magnam, nisi consequatur voluptate.</p>
      </div>
      <div className="buttons">
        <Link className='btn btn-md button-2' to='/'>Back Home</Link>
      </div>
    </div>
  )
}

export default About