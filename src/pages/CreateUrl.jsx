import UrlCreate from "../components/UrlCreate";
import Nav from "../components/Nav";


function CreateUrl() {
    document.title = "Create Short URL - Colrs"

    return <>
        <Nav />
        <div className="px-6">
            <UrlCreate />        
        </div>
    </>
}

export default CreateUrl;