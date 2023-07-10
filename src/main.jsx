import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,


}from "react-router-dom";
import ErrorPage from './error-page.jsx';
import MyReviews from './NavBar/MyReviews.jsx';
import Contact from './NavBar/Contact.jsx';
import AddBook from './NavBar/AddBook.jsx';
import Edit, {loader as editBookLoader} from './NavBar/Edit.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
      {
        path: "MyReviews/:MyReviewsId",
        element: <MyReviews />,
      },
       
          {
            path:"Edit/:EditId",
            element:<Edit/>,
            loader: editBookLoader,

        },
      
      
    
  
  {
    path:"Contact/:ContactId",
    element: <Contact/>
  },
  {
    path: "AddBook/:AddBookId",
    element:<AddBook/>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
