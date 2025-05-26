import Image from "next/image"
import Link from "next/link"

import ctaThumb from "@/assets/img/update/normal/cta.png";

const CtaAreaTwo = () => {
   return (
      <div className="pb-60 pt-60 position-relative z-index-common" id="startnow">
         <div className="container">
            <div className="cta-wrap3">
               <div className="cta-wrap-details">
                  <div className="section-title mb-20">
                     <h2 className="title style2 text-title mt-20 custom-width">
                        Daring Conversations to Awaken Your Passion
                     </h2>
                     <p className="sec-text text-title">
                        Choose the one who’s ready to share your most intimate desires — without limits or restrictions.
                     </p>
                  </div>
                  <Link href="https://t.me/AmoriaChat_bot/amoria" className="btn btn-two">
                     Start an intimate dialogue
                  </Link>
               </div>
               <div className="cta-3-thumb d-none d-md-block">
                  <Image className="" src={ctaThumb} alt="img" style={{transform: 'scale(1.8)'}}/>
               </div>
               <div className="cta-3-thumb d-block d-md-none">
                  <Image className="" src={ctaThumb} alt="img" style={{transform: 'scale(1.25)'}}/>
               </div>
            </div>

         </div>
      </div>
   )
}

export default CtaAreaTwo
