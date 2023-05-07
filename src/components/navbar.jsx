export const Navbar = () =>{
    return(
        <nav className="flex flex-row justify-between w-[100vw] h-fit px-16 p-3">
            <div>
                <h1>Devxp</h1>
            </div>
            <div className="flex flex-row ">
                <h2 className="mx-4">Home</h2>
                <h2 className="mx-4">About</h2>
                <h2 className="mx-4">Extra</h2>
            </div>
            <div>
                <button>Sign Up</button>
            </div>
        </nav>
    )
}