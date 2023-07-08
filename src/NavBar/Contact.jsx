import SearchBar from "../searchBar";
export default function Contact(){
return(
    <>
    <SearchBar/>
    <div className=" bg-slate-200 m-20 rounded-lg ">
        <h1 className="font-bold indent-3">Mailing Address:</h1>
        <br>
        </br>
        <ul className="indent-5">
            <li>  Mohannad Awad</li>
            <li>  BookReview.org</li>
            <li>  2800 Victory Blvd,Staten Island</li>
            <li>  Building 5n, room 108</li>
        </ul>
    </div>

    <div className=" bg-slate-200 m-20 rounded-lg ">
        <h1 className="font-bold indent-3">Recipient:</h1>
        <br>
        </br>
        <ul className="indent-5">
            
        <li> <lable>Your Email Address:</lable>
         <input className=" m-auto block rounded-lg w-96 " placeholder=""></input>
         </li>
         <br></br>
        <li> <lable>Your Name:</lable>
          <input className=" m-auto block rounded-lg w-96" placeholder=""></input>
          </li>
         <br></br>
        <li>  <lable>Subject:</lable>
          <input className=" m-auto block rounded-lg w-96" placeholder=""></input>
          </li>
         <br></br>
        <li> <lable>Message:</lable>
         <input className="rounded-lg w-96 h-40 m-auto block mg-px" placeholder="enter here"></input>
         </li>
        </ul>
        <button className="  outline-black items-center rounded-full w-auto p-7 bg-slate-400"type="submit">Send Email</button>
    </div>



    </>
);

}