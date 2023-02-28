import { Link } from "react-router-dom";
import MobileHeroImg from "./image/url_hero_mobile.svg";
import NonMobileHeroImg from "./image/url_hero_nonmobile.svg"

function Hero() {
    return <section class="flex flex-col-reverse md:flex-row items-center justify-center">
            <div class="w-full first-letter:md:w-1/2 px-[5%]">
                <h2 className="mt-5 font-quicksand text-3xl sm:text-4xl md:text-5xl font-bold">Make your Url slim with Colrs' Url now.</h2>
                <p className="my-4 text-md md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem voluptatem repudiandae fuga.</p>
                <Link to="/app/login"><button class="px-4 py-2 md:px-6 md:py-3 bg-primary rounded-lg font-medium text-lg border border-black" >Get Started</button></Link>
            </div>
            <img src={NonMobileHeroImg} alt="" class="hidden sm:hidden md:block w-1/3" />
            <img src={MobileHeroImg} alt="" class="md:hidden h-[200px] sm:w-1/2" />
        </section>
}

export default Hero;