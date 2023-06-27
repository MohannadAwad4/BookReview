import { useState } from 'react'

import './App.css'
import bookList from './bookList';
import Popup from './Popup';
import SearchBar from './searchBar';

function App() {


  const newBook=

    {
      title:"book4",
      images:{
        src:"https://images.unsplash.com/photo-1509266272358-7701da638078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
        alt:"Image Of Book"
      },
      author:"New author 4",
      genre:"New genre4",
      description:"New Filler hdnchsdjbsfgysgfsag"
    }

    let listB = bookList
  
  const [displayBooks,setdisplayBooks]=useState(bookList);
  const displayNewBook=()=>{
  

    // displayBooks.push(newBook)
    let newArray = [...displayBooks, newBook]
    console.log(displayBooks)
    setdisplayBooks(newArray)

    console.log("Testing dispay")
  }

  const [isPopup,setIsPopup]=useState(false);
  
  const showPopup = () => {
    setIsPopup(true);
  }

  const hidePopup = () => {
    setIsPopup(false);
  }

 
    
  

  return (
    <div>
     
      <main>
        {}
        <button  >Books Reviewed</button>
        <button >Books Marked</button>
      <SearchBar />

      
        


        <h1 className= "text-center ">Book List</h1>
      </main>

    <ul className='ml-10'>
        {displayBooks.map(book => (
          <li >
          
            <h3 >{book.title}</h3>
            
            <img src = {book.images.src} className="images"alt={book.alt}/>
            <image></image>
            <p ><strong>Author: </strong>{book.author}</p>
            <p><strong>Genre: </strong>{book.genre}</p>
            <p><strong>Description: </strong> {book.description}</p>
            <button className="Reviewbutton" onClick={showPopup}>Write Review</button>
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

    </Popup>

     


<button onClick={displayNewBook}>Click me</button>


      
    </div>
  );
}

export default App
