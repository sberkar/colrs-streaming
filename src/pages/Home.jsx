import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import { useAuth } from "../contexts/Auth";
import { db } from "../firebase_config";

function Home() {
    const { currentUser } = useAuth()
    document.title = "Home - Colrs"
    return <>
        <Nav />
        {(currentUser===null)?<>
            <Hero />
        </>:<><div>Home</div></>}
    </>
        
}

export default Home;