import { useState,useEffect } from 'react'
import {useLoaderData} from "react-router-dom";
import Popup from './Popup';
import AddForm from './NavBar/AddBook';
import MyReviews from './NavBar/MyReviews';


export default function BookUI(){
    const [isPopup,setIsPopup]=useState(false);
  
  const showPopup = () => {
    setIsPopup(true);
  }

  const hidePopup = () => {
    setIsPopup(false);
  }

    const [displayBooks,setdisplayBooks]=useState([]);

  const onAddBooks = (newBook) => {``
    
    setdisplayBooks((displayBooks) => {
      return [...displayBooks, newBook];
    });
  };
  
  useEffect(()=>{

    async function fetchJobs(){
    
    const response= await fetch("http://localhost:3000/bookList");
    
    const displayBooks =await response.json();
     setdisplayBooks(displayBooks);
     
     
    
    
    return displayBooks;
    
    }
    
    fetchJobs();
    
    },[])
    return (
        <>
        
       <ul className='ml-10 book-grid'>
  {displayBooks.map(book => (
    <li key={book.id} className="book-item">
      <div><h3>{book.title}</h3></div>
      <div><img src={book.images.src} className="images" alt={book.alt} /></div>
      <div><p><strong>Author: </strong>{book.author}</p></div>
      <div><p><strong>Genre: </strong>{book.genre}</p></div>
      <div><p><strong>Description: </strong>{book.description}</p></div>
      <div><button className="Reviewbutton" onClick={showPopup}>Write Review</button></div>
    </li>
  ))}
</ul>


 <Popup
      isVisible={isPopup}
      hidePopup={hidePopup}
    >
      <h2>Add Review</h2>
      <form id="poster-form">
       <input type="text" id="form-quote" placeholder="Enter Text Here"/>
    
      </form>
      <button onClick={hidePopup}>submit</button>

    </Popup> 
     <AddForm 
onAddBooks={onAddBooks}

/> 

    </>
    
    );
}