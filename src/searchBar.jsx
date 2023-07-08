import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";


function SearchBar({ items }) {
  
 
  return (
    <>
    <div className=" text-lg flex space-x-5 content-center bg-slate-200 ">
  <NavLink style={({isActive})=>{color:"red"}} className=" p-10 outline-black" to={`/`}>Home</NavLink>
  <NavLink style={({isActive})=>{color:"red"}} className=" p-10 outline-black" to={`/MyReviews/1`}>Your Reviewed</NavLink>
  <NavLink style={({isActive})=>{color:"red"}} className=" p-10 outline-black" to={`/AddBook/1`}>Add Book</NavLink>
  <NavLink style={({isActive})=>{color:"red"}} className=" p-10 outline-black" to={`/Contact/1`}>Contact</NavLink>
  <div>
          <form className=" p-10 outline-black " id="search-form" role="search">
            <input
            className="rounded-lg text-center"
              id="q"
              aria-label="Search contacts"
              placeholder="Search Books..."
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          
        </div>
</div>
     
    </>
  );
  
}

export default SearchBar;










