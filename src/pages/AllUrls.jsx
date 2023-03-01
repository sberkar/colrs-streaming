import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

import Nav from "../components/Nav";
import Url from "../components/Url";

import { useAuth } from "../contexts/Auth";
import { db } from "../firebase_config";



function AllUrls(){
    document.title = "All URLs - Colrs";
     
    const [urls, setUrls] = useState([])

    let { currentUser } = useAuth()

    useEffect(() => {
        let q = query(collection(db, "urls"), where("userId", "==", currentUser.uid));

        getDocs(q).then(qs => {
            console.log(qs.docs)
            setUrls(qs.docs.map(doc => doc.data()))
        }).catch(err => console.log(err))
    }, [])

    return <>
    <Nav /> 
    <section className="px-6 md:px-12 my-4 md:my-8  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {urls && urls.map(url =>  <Url urlData={url} />)}
    </section>
    </>
}

export default AllUrls;