import Hero from "../components/Hero";
import Nav from "../components/Nav";
import UrlCreate from "../components/UrlCreate"

import { useEffect, useState } from "react";

import { getDocs, limit, where, query, collection } from "firebase/firestore";
import { Link } from "react-router-dom"

import { useAuth } from "../contexts/Auth";
import { db } from "../firebase_config";
import Url from "../components/Url";

function Home() {
    document.title = "Home - Colrs"
    
    const { currentUser } = useAuth();

    const [urls, setUrls] = useState([])

    useEffect(() => {
        let q = query(collection(db, "urls"), where("userId", "==", currentUser.uid), limit(6))
        getDocs(q).then(docs => {
            setUrls(docs.docs.map(doc => doc.data()));
        }).catch(err => console.log(err));
    }, [currentUser])
    return <>
        <Nav />
        {(currentUser===null)?<>
            <Hero />
        </>:<div className="px-4 md:mt-8 md:px-12 flex items-center flex-col lg:flex-row">
            <div className="w-full p-2 lg:w-3/4 mb-4 md:m-0">
                <div className="flex mb-4 md:mb-8 justify-between items-center">
                    <h2 className="text-xl md:text-3xl font-medium">Your URLs</h2>
                    <Link to="/app/urls" className="block text-sm md:text-lg md:mr-16 font-semibold">All URLs</Link>
                </div>
                <div>
                    {urls.length == 0?<div>No Urls</div>:<div className="grid px-2 grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">{urls.map(url => <Url key={url.code} urlData={url} />)}</div>}
                </div>
            </div>
            <div className="w-full mt-5 lg:mt-0 sm:w-4/5 lg:w-1/4"><UrlCreate /></div>
        </div>}
    </>
        
}

export default Home;