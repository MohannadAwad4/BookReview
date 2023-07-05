

import{
    Outlet,
    NavLink,
    Link,
    useLoaderData,
    Form,
    redirect,
}from "react-router-dom";
import BookMarked from "./BookMarked";

import {getBookMark,createBookMark} from "./BookMarked";





export async function action() {
    const BookMarked = await createContact();
    return redirect('/BookMarked/${BookMarked.id}/edit');
  }
export async function loader() {
    const BookMarked = await getBookMark();
    return { BookMarked };
  }


export default function Root() {
const {BookMarked}=useLoaderData();
    return (
      <>
        <div id="sidebar">
          
          <div>
            
              
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            
            <form method="post">
              <button onClick={getBookMark}className="bg-red text-orange" type="submit">Sort</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
              <Link to={`BookMarked/1`}>Reviewed</Link>

              </li>
              <li>
              <Link to={`BookMarked/2`}>BookMarked</Link>

              </li>
            </ul>
          </nav>
          {BookMarked.length ? (
            <ul>
              {BookMarked.map((BookMark) => (
                <li key={BookMark.id}>

                  <Link to={`BookMarked/${BookMark.id}`}>
                
                     
                      
                   
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No BookMarked</i>
            </p>
          )}
          <Form method="post">
            <button type ="submit">New</button>
            </Form>
        </div>
        <div id="detail">
        <Outlet />
      </div>
      </>
    );
  }