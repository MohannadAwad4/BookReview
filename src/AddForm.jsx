import React, { useEffect, useState } from "react";


const newBook = {
  images: {
    src:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60",
    alt: "Image Of New Book",
  },
  title: "",
  author: "",
  genre: "",
  description: "",
};

function AddForm({ onAddBooks }) {
  console.log("OnAddBooks",onAddBooks);
  const [bookState, setBookState] = useState(newBook);
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
  
    // new job should be added to the DOM
    const preparedBook = {
      ...bookState,
      title: bookState.title,
      author: bookState.author,
      genre: bookState.genre,
      description: bookState.description,
    };
    debugger;
    const response = await fetch("http://localhost:4000/bookList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preparedBook),
    });
    const newestBook = await response.json();
    // parent component should be notified of created job
    onAddBooks(newestBook);
    // form should clear
    setBookState(newBook);
  };
  

  const showForm = () => {
    setIsAddForm(true);
  };

  const hideForm = () => {
    setIsAddForm(false);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        hideForm();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [hideForm]);

  if (!isAddForm) {
    return (
      <div>
        <button onClick={showForm}>Add Book</button>
      </div>
    );
  }
 

  return (
    <div onClick={hideForm} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-items-center items-center">
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
    </div>
  );
}
export default AddForm;