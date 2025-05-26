import Image from "next/image"
import Link from "next/link"

import hero_thumb from "@/assets/img/update/hero/hero-1.png"
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
               <div className="row flex-row-reverse position-relative mt-150">
                  <div className="col-lg-5 hero-image-large">
                     <div className="hero-thumb position-absolute">
                        <Image src={hero_thumb} alt="img" style={{transform: 'scale(1)'}}/>
                     </div>
                  </div>
                  <div className="col-lg-7">
                     <h1>Candid Conversations <br/> Without Boundaries</h1>
                     <p className="sec-text">
                        Discover Amoria — the platform for intimate and honest dialogues. Choose unique AI-generated
                        companions,
                        explore your desires, and dive into conversations where there are no limits. Completely
                        confidential, only
                        for users 18 and older.
                     </p>
                     <div className="btn-wrap">
                        <Link href="https://t.me/AmoriaChat_bot/amoria" className="btn btn2">
                           Start an intimate dialogue &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;<i
                            className="fab fa-telegram-plane telegram-icon"></i>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-5 hero-image-small mt-20">
               <div className="hero-thumb d-flex justify-content-center pt-80" style={{overflow: 'hidden'}}>
                  <Image
                      src={hero_thumb}
                      alt="img"
                      style={{transform: 'scale(1)', objectFit: 'cover'}}
                  />
               </div>
            </div>
            <div className="hero-countdown-wrap">
               <h2 className="hero-countdown-wrap-title">Amoria: the atmosphere for daring conversations
               </h2>
               <p className="sec-text">Choose who to talk to: from light flirting to the most revealing topics.
                  Characters are ready to share not only their thoughts but also their photos, including their most
                  personal ones.</p>
            </div>
         </div>
      </div>
   )
}

export default Hero
