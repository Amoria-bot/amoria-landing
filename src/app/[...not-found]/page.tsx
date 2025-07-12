import Error from "@/component/error/Index";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "404 Page Not Found - Amoria",
   description: "Sorry, the page you are looking for could not be found. Return to Amoria and discover candid conversations without boundaries with AI companions.",
};
const index = () => {
   return (
      <Wrapper>
         <Error />
      </Wrapper>
   )
}

export default index
