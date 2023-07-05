import { useState,useEffect } from 'react'
import './App.css'
import Popup from './Popup';
import SearchBar from './searchBar';
import AddForm from './AddForm';


function App() {
  
  //UseState for review Pop up


  const [isPopup,setIsPopup]=useState(false);
  
  const showPopup = () => {
    setIsPopup(true);
  }

  const hidePopup = () => {
    setIsPopup(false);
  }

//useState to fetch booklist frim
  const [displayBooks,setdisplayBooks]=useState([]);

  const onAddBooks = (newBook) => {``
    // modal should close
   // hideModal();
    // new job should be added to the DOM
    setdisplayBooks((displayBooks) => {
      return [...displayBooks, newBook];
    });
  };
  
  useEffect(()=>{

    async function fetchJobs(){
    
    const response= await fetch("http://localhost:4000/bookList");
    
    const displayBooks =await response.json();
     setdisplayBooks(displayBooks);
     
     
    
    
    return displayBooks;
    
    }
    
    fetchJobs();
    
    },[])
  

  

  
  
    
  

  return (
    <div>
     
     
      <main>
        
        <SearchBar
        items={displayBooks}
        />
        
        
      

      
        


        <h1 className= "text-center ">Book List </h1>
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
      <button onClick={hidePopup}>submit</button>

    </Popup>
    
   
    
     


<AddForm 
onAddBooks={onAddBooks}

/>


      
    </div>
  );
}

export default App
