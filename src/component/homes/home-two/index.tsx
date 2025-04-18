import Brand from "./Brand"
import CtaArea from "./CtaArea"
import CtaAreaTwo from "./CtaAreaTwo"
import FaqArea from "./FaqArea"
import FeatureArea from "./FeatureArea"
import FeatureAreaThree from "./FeatureAreaThree"
import FeatureAreaTwo from "./FeatureAreaTwo"
import HeroArea from "./HeroArea"
import Testimonia from "./Testimonia"
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

const HomeTwo = () => {
  return (
    <div className="home-purple-gradient">
      <HeaderOne />
      <HeroArea />
      <Brand />
      <FeatureArea />
      <FeatureAreaTwo />
      <FeatureAreaThree />
      <Testimonia />
      <CtaArea />
      <FaqArea />
      <CtaAreaTwo />
      <FooterOne />
    </div>
  )
}

export default HomeTwo
