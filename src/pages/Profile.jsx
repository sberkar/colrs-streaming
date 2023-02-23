import Nav from "../components/Nav";
import { useAuth } from "../contexts/Auth";

function Profile(){
    let { currentUser, logout } = useAuth();

    function handleLogout(){
        logout().then(() => {
            window.location.replace("/app/login")
        }).catch(err => {
            console.log(err)
        })
    }

    return <>
        <Nav />
        <section className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <img src={currentUser.photoURL} alt="Profile" className="rounded-full" />
                <h2 className="text-3xl mt-3 font-semi">{currentUser.displayName}</h2>
                <p className="mt-3 text-slate-800">{currentUser.email}</p>
                <button className="mt-3 py-2 px-4 text-[red] rounded border-[red] border" onClick={() => handleLogout()}>Logout</button>
            </div>
        </section> 
    </>
}

export default Profile;