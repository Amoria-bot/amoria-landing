import Image from "next/image"
import Link from "next/link"

import ctaThumb from "@/assets/img/update/normal/cta_3.png";

const CtaAreaTwo = () => {
   return (
      <div className="pb-60 pt-60 position-relative z-index-common" id="startnow">
         <div className="container">
            <div className="cta-wrap3">
               <div className="cta-wrap-details">
                  <div className="section-title mb-20">
                     <h2 className="title style2 text-title">Daring Conversations to Awaken Your Passion</h2>
                     <p className="sec-text text-title">Choose the one who’s ready to share your most intimate desires — without limits or restrictions.</p>
                  </div>
                  <Link href="https://t.me/AmoriaChat_bot" className="btn btn-two">
                     Start an intimate dialogue
                  </Link>
               </div>
               <div className="cta-3-thumb movingX">
                  <Image className="" src={ctaThumb} alt="img" style={{ transform: 'scale(1.5)' }} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default CtaAreaTwo
