import { Email } from "../assets/smtp";
import { useState } from "react";
export const SignUpForm = ()=>{
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const formSubmit = ()=>{
        console.log(email)
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "kingshakzy@gmail.com",
            Password : "28FE92AF7DBBDD498B0022170172E779C735",
            To : email,
            From : "kingshakzy@gmail.com",
            Subject : `Dear ${userName}`,
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
        
    }
    return(
        <div className="w-full flex items-center justify-center h-[100vh]">
        <form className="bg-grey-400 border-[1px] w-fit h-fit p-3 border-gray-700 rounded-lg" onSubmit={(e) => {e.preventDefault(); formSubmit();}}>
            <div>
                <input onChange={(e)=> setUserName(e.target.value)} type="text" className="border-[1px] border-gray-400 p-2 focus:outline-none rounded-md w-80 my-3" placeholder="Username" required></input>
            </div>
            <div>
                <input onChange={(e)=> setEmail(e.target.value)} type="email" className="border-[1px] border-gray-400 p-2 focus:outline-none rounded-md w-80" placeholder="example@gmail.com" required></input>
            </div>
            <button type="submit" className="p-2 my-2 active:bg-gray-700 hover:bg-gray-500  hover:border-[1px] rounded-lg w-full text-white border-gray-400 bg-gray-800">Submit</button>
        </form>
        </div>
    )
}