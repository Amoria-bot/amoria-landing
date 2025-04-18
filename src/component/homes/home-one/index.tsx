import FooterOne from "@/layouts/footers/FooterOne"
import Brand from "./Brand"
import ChooseArea from "./ChooseArea"
import EventArea from "./EventArea"
import FaqArea from "./FaqArea"
import Hero from "./Hero"
import IntroArea from "./IntroArea"
import InvestArea from "./InvestArea"
import PartnerArea from "./PartnerArea"
import Team from "./Team"
import RoadMap from "./RoadMap"
import HeaderOne from "@/layouts/headers/HeaderOne"
import Testimonia from "@/component/homes/home-two/Testimonia";
import CtaAreaTwo from "@/component/homes/home-two/CtaAreaTwo";

const HomeOne = () => {
    return (
        <div className="home-purple-gradient">
            <HeaderOne/>
            <Hero/>
            <ChooseArea/>
            <Team/>
            <Testimonia/>
            <FaqArea/>
            <CtaAreaTwo />
            <Brand/>
            <FooterOne/>
        </div>
    )
}

export default HomeOne
