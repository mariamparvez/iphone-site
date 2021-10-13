 import React from 'react'
 import './Search.css'
 
 function Search() {
     return (
         <div className='box-s c-banner-design'>
             <input type="text" className='location-s' placeholder='Search Location' />
             <input type="text" className='doctor-s' placeholder='Search for Doctors or Symptoms'/>
         </div>
     )
 }
 
 export default Search
 