import { Navbar } from "../components/navbar";
import { useState } from "react";
import { Faces } from "../components/faces";
export const Home = () =>{
    const[i, setI] = useState(1)
    const images = document.querySelectorAll(".images");
    const displayFace = () =>{
        console.log(images);
        images[i].classList.remove("hidden");
        console.log(images[i])
        setI(i+1)
    }
    console.log(images)
    return(
        <>
        {/* <Navbar></Navbar> */}
         <section className="w-[100vw] h-[100vh] p-4 flex flex-col items-center bg-gray-900">
                <header>
                    <h1 className="text-xl text-white">Who's watching?</h1>
                </header>
                <div className="h-[30rem] relative mx-8  px-8 border-gray-400 border- w-[30rem] rounded-full">
                    <div onClick={() => displayFace()} className="images  relative transition transform translate-x-[10rem] translate-y-1   w-28 h-28 rounded-full bg-red-900">
                        
                    </div>
                    <div className="images hidden  relative  w-28 h-28 rounded-full bg-white">
                    <Faces></Faces>
                    </div>
                    <div className="images hidden relative translate-y-[-6.7rem] translate-x-[19rem] w-28 h-28 rounded-full bg-white">
                    <Faces></Faces>
                    </div>
                    <div className="images hidden translate-x-[4rem] translate-y-[-4rem] relative w-28 h-28 rounded-full bg-white">
                    <Faces></Faces>
                    </div>
                    <div className="images hidden translate-x-[15rem] translate-y-[-11rem]  relative  w-28 h-28 rounded-full bg-white">
                    <Faces></Faces>
                    </div>
                   
            
                </div>
         </section>
        </>
    )
}