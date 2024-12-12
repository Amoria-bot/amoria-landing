import Image from "next/image"
import Link from "next/link"

import ctaThumb from "@/assets/img/update/normal/cta_3-1.png";

const CtaAreaTwo = () => {
   return (
      <div className="pb-120 position-relative z-index-common">
         <div className="container">
            <div className="cta-wrap3">
               <div className="cta-wrap-details">
                  <div className="section-title mb-20">
                     <h2 className="title style2 text-title">Daring conversations to awaken your passion</h2>
                     <p className="sec-text text-title">Choose the one who’s ready to share your most intimate desires — without limits or restrictions.</p>
                  </div>
                  <Link href="/contact" className="btn btn3">
                     Start an intimate dialogue
                  </Link>
               </div>
               <div className="cta-3-thumb movingX">
                  <Image src={ctaThumb} alt="img" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default CtaAreaTwo
