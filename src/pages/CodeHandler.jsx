import { doc, getDoc } from "firebase/firestore"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase_config";

function CodeHandler(){
    let { code } = useParams();
    useEffect(() => {
        let docRef = doc(db, "urls", code)
        getDoc(docRef).then(doc => {
            if(!doc.exists()) return window.location.replace("/not-found")
            let data = doc.data();
            window.location.replace(data.url)
        })
    }, [code])

    return <div></div>
}

export default CodeHandler;