import { Form, useLoaderData } from "react-router-dom";
import { useState, useEffect } from 'react';
import SearchBar from '../searchBar';

export async function loader({ params }) {
  const bookResponse = await fetch(`http://localhost:3000/bookList/${params.id}`);
  const book = await bookResponse.json();
  console.log("Fetched Book:", book); // Debugging console log
  return { book };
}

export default function DeleteBook() {
  const { book } = useLoaderData();
  const [bookState, setBookState] = useState(book);

  useEffect(() => {
    console.log("Current Book State:", bookState); // Debugging console log
  }, [bookState]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Hello</h1>
      <Form
        method="post"
        action="destroy"
        onSubmit={(event) => {
          event.preventDefault();
          if (!confirm("Please confirm you want to delete this record.")) {
            return;
          }

          // Perform delete operation here using the bookState or book.id
          // ...

          // Example code: Redirect to home page after delete
          window.location.href = "/";
        }}
      >
        <button type="submit">Delete</button>
      </Form>
    </>
  );
}
