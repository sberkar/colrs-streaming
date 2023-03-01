import { Link } from "react-router-dom"


function Url({urlData}){
    return <div className="flex">
            <div className="flex h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] capitalize items-center justify-center font-semi text-lg sm:text-2xl md:text-3xl bg-primary rounded md:rounded-lg border border-black mr-2 md:mr-4">{urlData.title[0]}</div>
            <div className="">
                <h3 className="text-lg md:text-xl font-medium md:font-medium  lg:text-2xl"><Link to={`/app/url/${urlData.code}`}>{urlData.title}</Link></h3>
                <p><a className="text-slate-800 text-sm md:text-lg" href={`/${urlData.code}`} target="_blank" rel="noopener noreferrer">{`colrs.in/${urlData.code}`}</a></p>
            </div>
        </div> 
}

export default Url;