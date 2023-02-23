import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { useAuth } from "../contexts/Auth";
import { db } from "../firebase_config";

function AllUrls(){
    const [urls, setUrls] = useState([])

    let { currentUser } = useAuth()
    useState(() => {
        let q = query(collection(db, "urls"), where("userId", "==", currentUser.uid));

        getDocs(q).then(qs => {
            console.log(qs.docs)
            setUrls(qs.docs.map(doc => doc.data()))
        }).catch(err => console.log(err))
    }, [])
    console.log(urls)

    return <>
    <Nav /> 
    <section className="px-[50px] my-8 grid grid-cols-3 gap-5">
        {urls && urls.map(url =>  <div className="flex">
            <div className="flex h-[72px] w-[72px] capitalize items-center justify-center font-semi text-3xl bg-[var(--primary-color)] rounded-lg border border-black mr-4">{url.title[0]}</div>
            <div className="">
                <h3 className="text-2xl"><Link to={`/app/url/${url.code}`}>{url.title}</Link></h3>
                <p><a className="text-slate-800" href={`/${url.code}`} target="_blank" rel="noopener noreferrer">{`colrs.in/${url.code}`}</a></p>
            </div>
        </div> )}
    </section>
    </>
}

export default AllUrls;