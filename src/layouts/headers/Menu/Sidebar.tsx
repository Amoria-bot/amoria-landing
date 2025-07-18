"use client";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

import logo_1 from "@/assets/img/logo/logo.png";

const Sidebar = ({ isActive, setIsActive }: any) => {

    return (
        <div className={` ${isActive ? "mobile-menu-visible" : ""}`}>
            <div className="mobile-menu">
                <nav className="menu-box">
                    <div onClick={() => setIsActive(false)} className="close-btn"><i className="fas fa-times"></i></div>
                    <div className="mobile-menu-logo-container">
                        <Link href="/"><Image src={logo_1} alt="Logo" width={100} height={35} className="mobile-menu-logo" /></Link>
                    </div>

                    <div className="menu-outer">
                        <MobileMenu setIsActive={setIsActive}/>
                    </div>
                    <div className="social-links">
                        <ul className="">
                            <li><Link href="https://t.me/amoria_community" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-telegram-plane"></i>
                            </Link></li>
                            <li><Link href="https://x.com/amoriachat" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 20" fill="none">
                                    <path
                                        d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                        fill="currentColor"></path>
                                </svg>
                            </Link></li>
                            <li><Link href="https://www.instagram.com/amoriachat/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </Link></li>
                            <li><Link href="https://www.youtube.com/@Amoriachat" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </Link></li>
                            <li><Link href="https://medium.com/@amoriachat" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-medium"></i>
                            </Link></li>
                        </ul>
                    </div>
                </nav>

            </div>
            <div onClick={() => setIsActive(false)} className="menu-backdrop"></div>
        </div>
    )
}

export default Sidebar