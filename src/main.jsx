import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import DeleteBook from './NavBar/DeleteBook.jsx';
import DeleteBook, { loader as deleteLoader } from './NavBar/DeleteBook.jsx';
import ErrorPage from './error-page.jsx';
import MyReviews from './NavBar/MyReviews.jsx';
import Contact from './NavBar/Contact.jsx';
import AddBook, { action as action} from './NavBar/AddBook.jsx';
import Edit, { loader as loader } from './NavBar/Edit.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/MyReviews/:MyReviewsId',
    element: <MyReviews />,
  },
  {
    path: '/Edit/:id',
    element: <Edit />,
    loader: loader,
  },
  {
    path: '/Contact/:ContactId',
    element: <Contact />,
  },
    {
      path: '/AddBook/:AddBookId',
      element: <AddBook />,
      action: action,
    },
    {
      path: '/Delete/:id',
      element: <DeleteBook />,
      loader: deleteLoader,
    },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
