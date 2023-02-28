import { addDoc, collection, doc, getDoc, serverTimestamp } from "firebase/firestore"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase_config";

function CodeHandler(){
    let { code } = useParams();
    useEffect(() => {
        let docRef = doc(db, "urls", code)
        let impressionCollectionRef = collection(db, "impressions")
        getDoc(docRef).then(doc => {
            if(!doc.exists()) return window.location.replace("/not-found")
            let data = doc.data();
            addDoc(impressionCollectionRef, {
                code: code,
                when: serverTimestamp()
            })
            window.location.replace(data.url)
        })
    }, [code])

    return <div></div>
}

export default CodeHandler;