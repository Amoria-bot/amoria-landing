import HomeOne from "@/component/homes/home-one";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
    title: "Amoria: Candid Conversations Without Boundaries",
    description: "Discover Amoria — the platform for intimate and honest dialogues. Choose unique AI-generated companions, explore your desires, and dive into conversations where there are no limits. Completely confidential, only for users 18 and older."
};
const index = () => {
    return (
        <Wrapper>
            <HomeOne/>
        </Wrapper>
    )
}

export default index