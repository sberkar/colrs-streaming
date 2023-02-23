import "./css/hero.css";
import MobileHeroImg from "./image/url_hero_mobile.svg";
import NonMobileHeroImg from "./image/url_hero_nonmobile.svg"

function Hero() {
    return <section class="hero">
            <div class="hero-info">
                <h2>Make your Url slim with Colrs' Url now.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem voluptatem repudiandae fuga.</p>
                <button class="cto">Get Started</button>
            </div>
            <img src={NonMobileHeroImg} alt="" class="non-mobile" />
            <img src={MobileHeroImg} alt="" class="mobile" />
        </section>
}

export default Hero;