import { useEffect, useState } from "react";
import { IonIcon } from "react-ion-icon"

import Logo from "./image/logo.svg"
import "./css/nav.css"
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
        <nav className="navbar">
            <div className="logo">
                <Link className="logo-text" to="/"><img src={Logo} alt="colrs url logo"/></Link>
                <span className="menu-outline"><IonIcon onClick={() => menuTogglerFn()} name={menuIcon} /></span>
            </div>
            <div className="menu" id="menu" style={menuState}>
                {!(currentUser===null)?<> 
                <div className="menu-item"><Link to="/app/create">Create</Link></div>
                <div className="menu-item"><Link to="/app/urls">All Urls</Link></div>
                <div className="menu-item"><Link to="/app/bio-page">Bio Page</Link></div>
                <div className="menu-item"><Link to="/app/profile"><img src={currentUser?.photoURL} alt="profile photo" /></Link></div>
                </>:<>
                    <div className="menu-item-non-login">
                        <Link to="/login">Login</Link>
                    </div>
                    <div className="menu-item-non-login">
                        <Link to="/login">Get Started</Link>
                    </div>
                </>}
            </div> 
        </nav>
    </header>
}

export default Nav;