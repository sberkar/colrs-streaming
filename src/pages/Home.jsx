import Hero from "../components/Hero";
import Nav from "../components/Nav";
import UrlCreate from "../components/UrlCreate"
import { useAuth } from "../contexts/Auth";

function Home() {
    const { currentUser } = useAuth()
    document.title = "Home - Colrs"
    return <>
        <Nav />
        {(currentUser===null)?<>
            <Hero />
        </>:<div className="px-6 md:px-8 flex flex-col md:flex-row">
            <div className="md:w-3/4">ksdjfls</div>
            <div className="w-1/4"><UrlCreate /></div>
        </div>}
    </>
        
}

export default Home;