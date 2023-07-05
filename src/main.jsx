import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root,{loader as rootLoader,action as rootAction,} from './routes/root';
import ErrorPage from './error-page';
import BookMarked from  "./routes/BookMarked"
import EditContact,{
action as EditAction,
}from './routes/edit';
import Index from "./routes/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action,rootAction,
   
    children: [
      {index:true, element:<Index/>},
      {
        path: "BookMarked/:BookMarkedId",
        element: <BookMarked />,
        loader: BookMarkedLoader,
      },
      {
        path:"BookMarked/:BookMarkedId.edit",
        element: <EditContact/>,
        loader: BookMarkedLoader,
        action : EditAction,
      },
      {
        path: "BookMarked/:BookMarkedId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
