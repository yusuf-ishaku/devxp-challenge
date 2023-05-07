import { GrAdd } from "react-icons/gr"
// import { IoAddSharp } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
export const Faces = (props) =>{
    const [i, setI]= useState(1)
    let images = props.can
    if(images.length === 0)images = document.querySelectorAll(".images")
    let displayFace = (e) =>{
        console.log(e.target);
        let di = e.target.nextElementSibling;
        console.log(di)
        di.classList.remove("hidden");
        images[i].innerHTML=   (`<div onClick={() => displayFace()}  className="text-white relative bg-gray-600 cursor-pointer  click w-28 h-28 rounded-full ">
        ${<IconContext.Provider value={{color: 'white'}}>
         <GrAdd></GrAdd>
        </IconContext.Provider>}
    
     </div>`)
        images[i-1].innerHTML = "";
       
        console.log(images[i])
        setI(i+1)
    }
    return(
        <>
           
             <div onClick={(e) => displayFace(e)}  className="text-white relative bg-gray-600 cursor-pointer  click w-28 h-28 rounded-full ">
                <IconContext.Provider value={{color: 'white'}}>
                 <GrAdd></GrAdd>
                </IconContext.Provider>
            
             </div>
        </>
    )
}