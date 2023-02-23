import { useAuth } from "../contexts/Auth";

import Nav from "../components/Nav"
import { useState } from "react";

function Login(){
    const [loginLoading, setLoginLoading] = useState(false)
    const { login } = useAuth()
    function handleLogin(){
        setLoginLoading(true)
        login().then(() => {
            window.location.replace("/app")
        }).catch(err => console.log(err))
        console.log("login called successfully")
    }

    return <>
        <Nav />
        <div className="flex flex-col justify-center items-center h-[90vh]">
            <button disabled={loginLoading} onClick={() => handleLogin()} className="flex drop-shadow-2xl bg-white items-center h-[56px] p-4 rounded-md">
                <img className="h-[40px] mr-1" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                <p>Sign In with Google</p>
            </button>
        </div> 
    </>
}

export default Login;