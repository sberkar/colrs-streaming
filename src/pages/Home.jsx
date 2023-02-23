import Hero from "../components/Hero";
import Nav from "../components/Nav";
import { useAuth } from "../contexts/Auth";

function Home() {
    const { currentUser } = useAuth()

    return <>
        <Nav />
        {(currentUser===null)?<>
            <Hero />
        </>:<><div>Home</div></>}
    </>
        
}

export default Home;