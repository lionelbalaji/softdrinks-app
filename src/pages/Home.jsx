import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css files/home.css'
import Navbar from '../pages/Navbar';
import data from '../pages/Dta'
import { Link } from 'react-router-dom';
const Home = () => {
      const[record,setRecord]=useState('')
  return (
    <>
      <div className="container container-fluid">
        <div className="row">
            <div className="col">
                <div className="navbar" > 
                    <div className="col" ><Navbar/></div>
                </div>
                <div className="row searchbar">
                    <div className="container search-bar">
                        <p className='search-p'>Search Your Favourite beverages</p>
                        <input type="text" autoFocus onChange={(e)=>setRecord(e.target.value)}/>
                    </div>
                </div>
                <div className="row  beverages">
                    <div className="col bever-col">
                      <h2>Fresh Juices And Shakes</h2>
                        {
                            // data.length>0&&data&&
                            data.filter((fill)=>fill.name.toLowerCase().includes(record)).map((dat)=>(
                               <div key={dat.id} className='container-fluid data-ul'>
                                <div className="row datarow-1">
                                  <div className="col datacolumn-1">
                                  <img src={dat.image} alt="image" />
                                  </div>
                                </div>
                                 <div className="row datarow-2">
                                  <div className="col datacolumn-2">
                                    <strong>{dat.name}</strong>
                                    <small>{dat.type}</small>
                                    <Link to={`/beveragedetails/${dat.id}`} className='btn btn-sm btn-primary button'>DETAILS</Link>
                                  </div>
                                 </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            
        </div>
      </div>
    
    </>
  )
}

export default Home