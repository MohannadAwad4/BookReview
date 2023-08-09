// src/routes/editJob.jsx
import { Form, useLoaderData } from "react-router-dom";
import{useState} from 'react';
import SearchBar from '../searchBar';


export async function loader({ params }) {
  const bookResponse = await fetch(`http://localhost:3000/bookList/${params.id}`);
  const book = await bookResponse.json();

  return { book };
}

function EditBook() {
  const { book } = useLoaderData();

  const [bookState, setBookState] = useState(book);
  const [isAddForm, setIsAddForm] = useState(false);

  const handleInput = (e) => {
    setBookState((bookState) => {
      return {
        ...bookState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAddBookFormSubmit = async (e) => {
    e.preventDefault();

    const preparedBook = {
      
      title: bookState.title,
      author: bookState.author,
      genre: bookState.genre,
      description: bookState.description,
      Isreview:true,
    };
    // new job should be added to the DOM
    const response = await fetch(`http://localhost:3000/bookList/${bookState.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preparedBook),
    });
    const newestBook = await response.json();
    
    onAddBooks(newestBook);
    
    setBookState(newBook);
    hideForm();
  };
  

  const showForm = () => {
    setIsAddForm(true);
  };

  const hideForm = () => {
    setIsAddForm(false);
  };


  return (
   <div>
    <SearchBar />
    <Form className=" bg-slate-200 m-20 rounded-lg " 
    method="post" 
    onSubmit={handleAddBookFormSubmit}
    id="contact-form"
    >
    
    <ul className="indent-5">
            
            <li> <lable>Title:</lable>
             <input onChange={handleInput} name='title' value={bookState.title} className=" m-auto block rounded-lg w-96 " placeholder=""></input>
             </li>
             <br></br>
            <li> <lable>Author:</lable>
              <input onChange={handleInput} name='author' value={bookState.author} className=" m-auto block rounded-lg w-96" placeholder=""></input>
              </li>
             <br></br>
            <li>  <lable>Genre:</lable>
              <input onChange={handleInput} name='genre' value={bookState.genre} className=" m-auto block rounded-lg w-96" placeholder=""></input>
              </li>
             <br></br>
            <li> <lable>Review:</lable>
             <input onChange={handleInput} name='review' value={bookState.description} className="rounded-lg w-96 h-40 m-auto block mg-px" ></input>
             </li>
            </ul>
    
       
            <input onSubmit={handleAddBookFormSubmit} value="save" className=" justify-end  outline-black items-center rounded-full w-auto p-2 bg-slate-400"type="submit"></input>
            
           
      
    </Form>
   </div>
    
  );
}

export default EditBook;