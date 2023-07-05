import { Form,useLoaderData } from "react-router-dom";
import getBookMark from "../bookList";



export async function loader({params}){
    const BoookMarked=await getBookMark(params.BookMarked.Id);
    return {BookMarked};
}
export default function BookMarked(){
    const {BookMarked}=useLoaderData();
    
    return (

    <div>

<Form
  method="post"
  action="destroy"
  onSubmit={(event) => {
    if (
      !confirm(
        "Please confirm you want to delete this record."
      )
    ) {
      event.preventDefault();
    }
  }}
>
  <button type="submit">Delete</button>
</Form>
        <p>Hello World</p>
        <button onClick={getBookMark}>Click Me</button>
    </div>
    );
}