import { Navbar } from "../components/navbar";
import { useState, useEffect, useRef } from "react";
import { Faces } from "../components/faces";
import { GrAdd } from "react-icons/gr";
import { IconContext } from "react-icons/lib";
export const Home = (props) =>{
    let circleM = useRef()
    const [i, setI]= useState(0);
   
    
    let bro = document.createElement("div");
    
    bro.classList.add("z-10","bg-gray-600", "w-28", "h-28");
   
    let displayFace = (e) =>{
       
       
        let circles = circleM.current.childNodes;
        // console.log(circles)
        if(i !== 4){
            circles[i].classList.remove("hidden");
            circles[i].innerHTML = "";
            // circles[i+1].appendChild(bro)
            // console.log(i);
            // console.log(circles[i])
            setI(i+1)
        }else if(i===4){
            setI(0);
            circles[i].classList.remove("hidden");
            circles[i].innerHTML = "";
            // circles[0].appendChild(bro);
            console.log(i);
            console.log(circles[i])
        }
        else{
           setI(0)
        }
    }
    // console.log(images)
    return(
        <>
        {/* <Navbar></Navbar> */}
         <section className="w-[100vw] h-[100vh] p-4 flex flex-col items-center bg-gray-900">
                <header>
                    <h1 className="text-xl text-white">Who's watching?</h1>
                </header>
                <div ref={circleM}  className="h-[30rem] mx-8  px-8 border-gray-400 border- mt-16 w-[30rem] rounded-full">
                    <div className="images hidden translate-x-[10rem] w-28 h-28 rounded-full bg-red-900">
                        <div className="block w-28 h-28 z-10 rounded-full border-gray-400"></div>
                    </div>
                    <div  className="images hidden  relative  w-28 h-28 rounded-full bg-white">
                      <img src="" alt="" />
                    </div>
                    <div  className="images hidden translate-x-[20rem] translate-y-[-6.6rem] relative w-28 h-28 rounded-full bg-white">
                   
                    </div>
                    <div  className="images hidden translate-y-[-5rem] translate-x-[4rem]  relative w-28 h-28 rounded-full bg-white">
                  
                    </div>
                    <div  className="images hidden relative translate-y-[-11.8rem] translate-x-[16rem]  w-28 h-28 rounded-full bg-white">
                  
                    </div>
                    <div onClick={()=>displayFace()} className="translate-y-[-10rem] translate-x-[8rem] self-center text-white text-xl flex flex-row items-center justify-center w-40 h-16 bg-gray-600 rounded-2xl">
                        Add Profile
                    </div>
                </div>
         </section>
        </>
    )
}