"use client"
import Slider from "react-slick";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image"

import testi_bg from "@/assets/img/update/bg/testimonial-4-bg.png"
import avatar from "@/assets/img/update/testimonial/testi_thumb.png"

interface DataType {
   id: number;
   avatar: StaticImageData;
   title: string;
   designation: string;
   des: JSX.Element;
   rating: string[];
}[];

const testi_data: DataType[] = [
   {
      id: 1,
      avatar: avatar,
      title: "James",
      designation: "Developer",
      des: (<>Amoria is a place where you can talk openly, without pretense or limits. I’ve found here what I’ve been looking for.</>),
      rating: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star",],
   },
   {
      id: 2,
      avatar: avatar,
      title: "William",
      designation: "Product Designers",
      des: (<>Every conversation here is a challenge. The characters aren’t just companions; they know how to captivate and hold your attention.</>),
      rating: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star",],
   },
   {
      id: 3,
      avatar: avatar,
      title: "Oliver",
      designation: "Developer",
      des: (<>Everything in Amoria is completely honest: you speak, they respond. And no matter how open you’re willing to be — here, it’s normal.</>),
      rating: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star",],
   },
   {
      id: 4,
      avatar: avatar,
      title: "Benjamin",
      designation: "Product Designers",
      des: (<>I love that there’s no censorship or pretense. Conversations with the characters are engaging and ignite interest.</>),
      rating: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star",],
   },
   {
      id: 4,
      avatar:avatar,
      title: "Henry",
      designation: "Developer",
      des: (<>Amoria surprises with its simplicity and honesty. It’s a place where I can allow myself more.</>),
      rating: ["fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star", "fas fa-star",],
   },
]

const settings = {
   dots: false,
   infinite: true,
   speed: 1000,
   autoplay: false,
   arrows: false,
   slidesToShow: 2,
   slidesToScroll: 1,
   adaptiveHeight: true,
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 991,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
   ]
}

const Testimonia = () => {

   const sliderRef = useRef<Slider | null>(null);

   const handlePrevClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickPrev();
      }
   };

   const handleNextClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickNext();
      }
   };

   return (
      <div className="pb-60 pt-60 overflow-hidden" id="reviews">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="section-title text-center mb-50">
                     <h2 className="title style2">Try What Thousands Have Already Experienced</h2>
                  </div>
               </div>
            </div>

            <div className="testimonial-wrap-3">
               <div className="testimonial-wrap-circle1 alltuchtopdown"></div>
               <div className="testimonial-wrap-circle2 leftToRight"></div>
               <div className="testimonial-wrap-circle3 leftToRight"></div>
               <div className="testimonial-wrap-bg alltuchtopdown">
                  <Image src={testi_bg} alt="img" />
               </div>

               <div className="slider-area testimonial-slider-wrap">
                  <Slider {...settings} ref={sliderRef} className="row testimonial-slider1">
                     {testi_data.map((item) => (
                        <div key={item.id} className="col-lg-6 slider-item">
                           <div className="testi-box ">
                              <div className="testi-box-profile">
                                 <div className="testi-box-profile-thumb">
                                    <Image src={item.avatar} alt="img" />
                                 </div>
                                 <div className="testi-box-profile-details">
                                    <h4 className="testi-box_name">{item.title}</h4>
                                    <span className="testi-box_desig">User</span>
                                 </div>
                                 <div className="testi-box-profile-ratting">
                                    {item.rating.map((rat, i) => (
                                       <i key={i} className={rat}></i>
                                    ))}
                                 </div>
                              </div>
                              <p className="testi-box_text">{item.des}</p>
                           </div>
                        </div>
                     ))}
                  </Slider>
                  <button onClick={handlePrevClick} data-slider-prev=".testimonial-slider1" className="slider-arrow prev-btn"><i className="fas fa-arrow-left"></i></button>
                  <button onClick={handleNextClick} data-slider-next=".testimonial-slider1" className="slider-arrow next-btn"><i className="fas fa-arrow-right"></i></button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Testimonia
