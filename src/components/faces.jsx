import { GrAdd } from "react-icons/gr"
// import { IoAddSharp } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
export const Faces = (props) =>{
   
    return(
        <>
           
             <div  className="text-white relative bg-gray-600 cursor-pointer  click w-28 h-28 rounded-full ">
                <IconContext.Provider value={{color: 'white'}}>
                  {/* <IoAddSharp></IoAddSharp> */}
                </IconContext.Provider>
            
             </div>
        </>
    )
}