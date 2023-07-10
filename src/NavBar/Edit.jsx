import {useLoaderData,Link,Form} from "react-router-dom";
export async function loader({params}){
    const bookResponse=await fetch("http://localhost:3000/bookList/${params.EditId}");
    const books=await bookResponse.json();
    return {books};
}
export default function Edit(){
    const {books}=useLoaderData();
    console.log("Edit Books: ",books);
    return <div>This is my Editting Page </div>
}