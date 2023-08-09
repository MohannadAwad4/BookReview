import { Outlet, Link } from 'react-router-dom';
import SearchBar from '../searchBar';
import { useState, useEffect } from 'react'
import DeleteBook from './DeleteBook';

export default function MyReviews() {
  const [isPopup, setIsPopup] = useState(false);
  const [displayBooks, setDisplayBooks] = useState([]);

  const showPopup = () => {
    setIsPopup(true);
  };

  const hidePopup = () => {
    setIsPopup(false);
  };

  const onAddBooks = (newBook) => {
    setDisplayBooks((prevDisplayBooks) => [...prevDisplayBooks, newBook]);
  };

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch("http://localhost:3000/bookList");
      const fetchedBooks = await response.json();
      setDisplayBooks(fetchedBooks);
    }

    fetchBooks();
  }, []);




  const filteredBooks = displayBooks.filter(book => book.Isreview === true);



  return (
    <>

      <SearchBar />

      <h1 className='text-center'>Reviewed Books</h1>
      <ul className='ml-10 book-grid'>
        {filteredBooks.map(book => (
          <li key={book.id} className="book-item">
            <div><h3>{book.title}</h3></div>
            <div><img src={book.images.src} className="images" alt={book.alt} /></div>
            <div><p><strong>Author: </strong>{book.author}</p></div>
            <div><p><strong>Genre: </strong>{book.genre}</p></div>
            <div><p><strong>Description: </strong>{book.description}</p></div>
            <div className="flex gap-1">

              <Link to={`/Edit/${book.id}`}>Edit</Link>
              <Link to={`/Delete/${book.id}`}>Delete</Link>

              
            </div>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );

}