
//import bookList from "./bookList";
function searchBar(){
    //
    return (
        <div >
            <div className=" bg-white grid grid-rows-1 grid-flow-col gap-4 border-8 border-white outline-black"> 
            <button className="outline-blue-500" >Books Reviewed</button>
            <button >Books Marked</button>
            <form className="ml-52">
                <input type="text" className="mr-50" placeholder="Search.." name="search"/>
                <button className="text-align:center bg-white outline-black"type="submit">Submit</button>
            </form>
            </div>
           
            
            
        </div>
    );

}
export default searchBar;