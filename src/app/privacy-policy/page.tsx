import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import PrivacyPolicy from "@/component/privacy-policy/PrivacyPolicy";
import Team from "@/component/homes/home-one/Team";

export const metadata = {
    title: "Amoria: Privacy Policy",
    description: "Discover Amoria — the platform for intimate and honest dialogues. Choose unique AI-generated companions, explore your desires, and dive into conversations where there are no limits. Completely confidential, only for users 18 and older."
};
const index = () => {
    return (
        <Wrapper>
            <div className="home-purple-gradient">
                <HeaderOne/>
                <PrivacyPolicy/>
                <FooterOne/>
            </div>
        </Wrapper>
    )
}

export default index