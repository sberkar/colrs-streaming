import Hero from "../components/Hero";
import Nav from "../components/Nav";
import { useAuth } from "../contexts/Auth";

function Home() {
    const { currentUser } = useAuth()
    document.title = "Home - Colrs"
    return <>
        <Nav />
        {(currentUser===null)?<>
            <Hero />
            {process.env.REACT_APP_APIKEY}
        </>:<><div>Home</div></>}
    </>
        
}

export default Home;