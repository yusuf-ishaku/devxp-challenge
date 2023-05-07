import { Navbar } from "../components/navbar";
import { useState, useEffect, useReducer } from "react";
import { Faces } from "../components/faces";
import { GrAdd } from "react-icons/gr";
export const Home = (props) =>{
  
  
    // console.log(images)
    return(
        <>
        {/* <Navbar></Navbar> */}
         <section className="w-[100vw] h-[100vh] p-4 flex flex-col items-center bg-gray-900">
                <header>
                    <h1 className="text-xl text-white">Who's watching?</h1>
                </header>
                <div className="h-[30rem] relative mx-8  px-8 border-gray-400 border- w-[30rem] rounded-full">
                    <div  className="images  relative transition transform translate-x-[10rem] translate-y-1   w-28 h-28 rounded-full bg-red-900">
                        <Faces can = {props.cant}></Faces>
                    </div>
                    <div className="images hidden  relative  w-28 h-28 rounded-full bg-white">
                   
                    </div>
                    <div className="images hidden relative translate-y-[-6.7rem] translate-x-[19rem] w-28 h-28 rounded-full bg-white">
                   
                    </div>
                    <div className="images hidden translate-x-[4rem] translate-y-[-4rem] relative w-28 h-28 rounded-full bg-white">
                   
                    </div>
                    <div className="images hidden translate-x-[15rem] translate-y-[-11rem]  relative  w-28 h-28 rounded-full bg-white">
                   
                    </div>
                   
            
                </div>
         </section>
        </>
    )
}