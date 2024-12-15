import Image from "next/image"
import Link from "next/link";

import footer_bg from "@/assets/img/update/bg/bg-gradient1-1.jpg";

const FooterOne = () => {
   return (
      <footer className="footer-wrapper footer-layout1 position-relative mt-60">
         <div className="bg-gradient-1">
            <Image src={footer_bg} alt="img" />
         </div>
         <div className="container">
            <div className="footer-menu-area">
               <div className="row gy-4 justify-content-between align-items-center">
                  <div className="col-xl-5 col-lg-4">
                     <div className="social-btn justify-content-center justify-content-lg-start">
                        <Link href="https://t.me/amoria_community">
                           <i className="fab fa-telegram-plane"></i>
                        </Link>
                        <Link href="https://x.com/amoriachat">
                           <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 20" fill="none">
                              <path
                                 d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                 fill="currentColor"></path>
                           </svg>
                        </Link>
                        <Link href="https://www.instagram.com/amoriachat/">
                           <i className="fab fa-instagram"></i>
                        </Link>
                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-8 text-lg-end text-center">
                     <ul className="footer-menu-list">
                        <li>
                           <Link href="/#">
                              HOME
                           </Link>
                        </li>
                        <li>
                           <Link href="/#features">
                              FEATURES
                           </Link>
                        </li>
                        <li>
                           <Link href="/#characters">
                              CHARACTERS
                           </Link>
                        </li>
                        <li>
                           <Link href="/#reviews">
                              REVIEWS
                           </Link>
                        </li>
                        <li>
                           <Link href="/#faq">
                              FAQ
                           </Link>
                        </li>
                        <li>
                           <Link href="/#startnow">
                              START NOW
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="copyright-wrap text-center text-lg-start">
            <div className="container">
               <div className="row gy-3 justify-content-between align-items-center">
                  <div className="col-lg-6 align-self-center">
                     <p className="copyright-text">Copyright © 2024 Amoria. All rights reserved.</p>
                  </div>
                  <div className="col-lg-6 text-lg-end">
                     <ul className="footer-links">
                        <li>
                           <Link href="/privacy-policy">
                              Privacy Policy
                           </Link>
                        </li>
                        <li>
                           <Link href="/terms-of-service">
                              Terms Of Service
                           </Link>
                        </li>
                     </ul>
                  </div>

               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
