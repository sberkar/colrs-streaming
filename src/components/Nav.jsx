import { useEffect, useState } from "react";
import { IonIcon } from "react-ion-icon"

import Logo from "./image/logo.svg"
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

function Nav() {
    const [menuIcon, setMenuIcon] = useState("menu");
    const [menuState, setMenuState] = useState({ visibility: "hidden" });
    const { currentUser } = useAuth()
    
    let width = window.innerWidth;
    useEffect(() => {
        if(!(width <= 768)){
            setMenuState({ visibility: "visible"})
        }
    }, [width])
    function menuTogglerFn(){
        if(menuIcon === "menu"){
            setMenuIcon("close")
            setMenuState({visibility: "visible"})
            
        }else{
            setMenuIcon("menu")
            setMenuState({visibility: "hidden"})
        }
    }

    return <header>
        <nav className="flex items-center px-4 py-3 md:p-5">
            <div className="w-full flex items-center justify-between md:w-1/4">
                <Link className="" to="/"><img src={Logo} className="h-[50px] md:h-[80px]" alt="colrs url logo"/></Link>
                <span className="md:hidden relative z-10 text-3xl" onClick={() => menuTogglerFn()}><IonIcon name={menuIcon} /></span>
            </div>
            <div className="fixed bg-white invisible top-0 left-0 flex flex-col items-center justify-center w-screen h-screen md:h-auto md:w-3/4 md:flex md:static md:justify-end md:bg-transparent md:flex-row" id="menu" style={menuState}>
                {!(currentUser===null)?<> 
                <div className="mx-4 font-medium text-lg"><Link to="/app/create">Create</Link></div>
                <div className="mx-4 font-medium text-lg"><Link to="/app/urls">All Urls</Link></div>
                <div className="mx-4 font-medium text-lg"><Link to="/app/bio-page">Bio Page</Link></div>
                <div className="mx-4 font-medium text-lg"><Link to="/app/profile"><img className="rounded-full h-12" src={currentUser?.photoURL} alt="profile photo" /></Link></div>
                </>:<>
                    <div className="mx-4">
                        <Link to="/app/login" className="text-lg font-medium">Login</Link>
                    </div>
                    <div className="mx-4">
                        <Link to="/app/login" className="text-lg border border-black px-4 py-2 bg-primary rounded-md font-medium">Get Started</Link>
                    </div>
                </>}
            </div> 
        </nav>
    </header>
}

export default Nav;