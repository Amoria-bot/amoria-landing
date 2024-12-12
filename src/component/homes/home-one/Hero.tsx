import Image from "next/image"
import Link from "next/link"

import hero_thumb from "@/assets/img/update/hero/hero-1-1.jpg"
import CountdownClock from "@/ui/CountDownClock"

const Hero = () => {
   return (
      <div className="hero-wrapper hero-1">
         <div className="hero-bg-gradient">
         </div>
         <div className="ripple-shape">
            <span className="ripple-1"></span>
            <span className="ripple-2"></span>
            <span className="ripple-3"></span>
            <span className="ripple-4"></span>
            <span className="ripple-5"></span>
         </div>

         <div className="container">
            <div className="hero-style1">
               <div className="row flex-row-reverse">
                  <div className="col-lg-3">
                     <div className="hero-thumb alltuchtopdown">
                        <Image src={hero_thumb} alt="img" />
                     </div>
                  </div>
                  <div className="col-lg-9">
                     <h1 className="hero-title">Bold conversations without boundaries</h1>
                     <h2 className="hero-subtitle">A place for honest conversations and new emotions. Choose a companion to your liking.
                     </h2>
                     <div className="btn-wrap">
                        <Link href="/contact" className="btn btn2">
                           Start an intimate dialogue &nbsp;<i className="fab fa-telegram-plane"></i>
                        </Link>
                     </div>
                  </div>

               </div>
            </div>
            <div className="hero-countdown-wrap">
               <h2 className="hero-countdown-wrap-title">Amoria: the atmosphere for daring conversations
               </h2>
               <h3 className="hero-content">Choose who to talk to: from light flirting to the most revealing topics. Characters are ready to share not only their thoughts but also their photos, including their most personal ones.</h3>
            </div>
         </div>
      </div>
   )
}

export default Hero
