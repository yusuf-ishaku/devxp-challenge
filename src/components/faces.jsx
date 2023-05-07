import { GrAdd } from "react-icons/gr"
// import { IoAddSharp } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
export const Faces = (props) =>{
   
    // if(images.length === 0)setImages(document.querySelectorAll(".images"))
   
    return(
        <>
           
             <div   className="flex items-center justify-center text-white relative bg-gray-600 cursor-pointer  click w-28 h-28 rounded-full ">
                <IconContext.Provider value={{color: 'white'}}>
                 <GrAdd></GrAdd>
                </IconContext.Provider>
            
             </div>
        </>
    )
}