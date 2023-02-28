import { useState } from "react";
import { generate } from "randomstring";
import { setDoc, doc } from "firebase/firestore"

import { db } from "../firebase_config";
import { useAuth } from "../contexts/Auth";

import Nav from "../components/Nav";


function CreateUrl() {
    document.title = "Create Short URL - Colrs"

    const [url, setUrl] = useState("")
    const [urlError, setUrlError] = useState("")
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    let code = generate(8)
    const { currentUser } = useAuth()

    function validate(){
        if(url.length < 5){
            setUrlError("please enter a valid url")
            if(title.length === 0){
                setTitleError("please enter a title")
            }
            return false
        }
        if(title.length === 0){
            setTitleError("please enter a title")
            return false
        }
        return true
    }
    function handleSubmit(){
        if(!validate()) return
        if(url.length < 6) {
            return setUrlError("please enter a valid url")
        }
        let data = {
            title: title,
            url: url,
            code: code,
            userId: currentUser.uid
        }
        setDoc(doc(db, "urls", code), data).then(d => {
            setSuccessMsg("short url created successfully")
            setUrl("")
            setTitle("")
            setTitleError("");
            setUrlError("")
        }).catch(err => console.log(err))
    }
    return <>
        <Nav />
        <div className="w-full flex items-center justify-center mt-8 ">
            <div className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] p-4 border border-slate-200">
                <h1 className="text-2xl font-semibold md:text-3xl my-4 text-center">Create Short Url</h1>
                <div className="w-full my-4">
                    <input type="text" className={`block w-full border ${urlError.length > 0?"border-[red]":"border-black"} placeholder:text-slate-700 px-2 py-1 rounded placeholder-black`} placeholder="Enter URL" onChange={e => setUrl(e.target.value)} value={url}/>
                    <p className="text-[red] text-md">{urlError.length > 0 && urlError}</p>
                </div>
                <div className="w-full my-4">
                    <input type="text" className={`block w-full border ${urlError.length > 0?"border-[red]":"border-black"} px-2 py-1 placeholder:text-slate-700`} placeholder="Enter Title" onChange={e => setTitle(e.target.value)} value={title}/>
                    <p className="text-[red] text-md">{titleError.length > 0 && titleError}</p>
                </div>
                
                <div className="w-full my-4">
                    <button onClick={() => handleSubmit()} className="w-full border border-black bg-[#FFC700] px-4 py-2 rounded">Create It!</button>
                </div>
                {successMsg && <p className="text-[green]">{successMsg}</p>}
            </div>
        </div>
    </>
}

export default CreateUrl;