import { useState,useEffect } from 'react'
import './App.css'
import Popup from './Popup';
import SearchBar from './searchBar';
import AddForm from './NavBar/AddBook';
import { Outlet } from "react-router-dom";
import BookUI from './BookUI';
import Layout from './Layout';
import MyReviews from './NavBar/MyReviews';

function App() {
  
  


  

  

  
  
    
  

  return (
    <div>
      
     <SearchBar/>
      <h1 className= "text-center ">Book List</h1>


    
    
    <div><BookUI/></div>
    

   </div>
      
   
    
     





      
    
  );
}

export default App
