import React, { useEffect, useState } from "react";
import { Form, useLoaderData,redirect } from "react-router-dom";
import SearchBar from "../searchBar";


export async function action({ request, params }) {
  let formData = await request.formData();
  let bookData = Object.fromEntries(formData);
  
 
  const response = await fetch("http://localhost:3000/bookList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookData)
  })
  console.log("bookData: ",bookData);
  return redirect('/');
}



function AddBook() {
  
 
  
  

 

  return (
    <>
    <SearchBar/>
    <Form 
    className=" bg-slate-200 m-20 rounded-lg " 
    method="post" 
    
    id="contact-form"
    >
    
    <ul className="indent-5">
            
            <li> <lable>Title:</lable>
             <input type="text" name='title'  className=" m-auto block rounded-lg w-96 " placeholder=""></input>
             </li>
             <br></br>
            <li> <lable>Author:</lable>
              <input type="text" name='author'  className=" m-auto block rounded-lg w-96" placeholder=""></input>
              </li>
             <br></br>
            <li>  <lable>Genre:</lable>
              <input type="text" name='genre'  className=" m-auto block rounded-lg w-96" placeholder=""></input>
              </li>
             <br></br>
            <li> <lable>Review:</lable>
             <input type="text" name='review'  className="rounded-lg w-96 h-40 m-auto block mg-px" ></input>
             </li>
            </ul>
    
       
            <input  value="save" className=" justify-end  outline-black items-center rounded-full w-auto p-2 bg-slate-400"type="submit"></input>
            
           
      
    </Form>
    </>
  );
    

  
    }
    
  

export default AddBook;



{/* <div onClick={hideForm} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-items-center items-center">
      <div onClick={(e) => e.stopPropagation()} className="max-w-xl w-144 mx-auto flex flex-col">
        <button
          onClick={hideForm}
          className="bg-transparent text-black text-xl place-self-end">
          X
        </button>
        <div className="bg-white text-blue-800 p-8">
          <h2 className="text-center text-5xl">Your Book</h2>
          <br></br>
          <form type="text" className=""
            onSubmit={handleAddBookFormSubmit} >

            <input onChange={handleInput} type="text" name="title" placeholder="add title" value={bookState.title} />

            <input onChange={handleInput} type="text" name="author" placeholder="add author" value={bookState.author} />

            <input onChange={handleInput} type="text" name="genre" placeholder="add genre" value={bookState.genre} />

            <input onChange={handleInput} type="text" name="description" placeholder="add description" value={bookState.description} />
            <button onClick={handleAddBookFormSubmit}>Submit</button>
        

          </form>
        </div>
      </div>
    </div> */}