import { useState } from "react";
import { generate } from "randomstring";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"

import { db } from "../firebase_config";
import { useAuth } from "../contexts/Auth";

import Nav from "../components/Nav";


function CreateUrl() {
    const [url, setUrl] = useState("")
    const [title, setTitle] = useState("");
    let code = generate(8)
    const { currentUser } = useAuth()

    function checkUrlCodeExist(code, cb){
        let q = query(collection(db, "urls"), where("code", "===", code))
        getDocs(q).then(querySnap =>{
            if(querySnap.empty == false){
                return checkUrlCodeExist(generate(8), null)
            }
            cb(code)
        })
    }

    function handleSubmit(){

        let collectionRef = collection(db, "urls")
        checkUrlCodeExist(code, c => {
            let data = {
                title: title,
                url: url,
                code: c,
                userId: currentUser.uid
            }
            addDoc(collectionRef, data).then(d => {
                console.log(d)
            }).catch(err => console.log(err))
        });
    }
    return <>
        <Nav />
        <div className="w-full flex items-center justify-center">
            <div className="w-[30%] p-4 border border-slate-200">
                <h1 className="text-3xl my-4 text-center">Create Shortened Url</h1>
                <div className="w-full my-4">
                    <input type="text" className="w-full border border-black px-2 py-1 rounded placeholder-black" placeholder="Enter URL" onChange={e => setUrl(e.target.value)} value={url}/>
                </div>
                <div className="w-full my-4">
                    <input type="text" className="w-full border border-black px-2 py-1 rounded placeholder-black" placeholder="Enter Title" onChange={e => setTitle(e.target.value)} value={title}/>
                </div>
                <div className="w-full my-4">
                    <button onClick={() => handleSubmit()} className="w-full border border-black bg-[#FFC700] px-4 py-2 rounded">Create It!</button>
                </div>
            </div>
        </div>
    </>
}

export default CreateUrl;