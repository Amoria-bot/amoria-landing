import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import character_1 from "@/assets/img/update/team/character-1.jpg"
import character_2 from "@/assets/img/update/team/character-2.jpg"
import character_3 from "@/assets/img/update/team/character-3.jpg"
import character_4 from "@/assets/img/update/team/character-4.jpg"
import character_5 from "@/assets/img/update/team/character-5.jpg"
import character_6 from "@/assets/img/update/team/character-6.jpg"
import character_7 from "@/assets/img/update/team/character-7.jpg"
import character_8 from "@/assets/img/update/team/character-8.jpg"
import character_9 from "@/assets/img/update/team/character-9.jpg"
import character_10 from "@/assets/img/update/team/character-10.jpg"
import character_11 from "@/assets/img/update/team/character-11.jpg"
import character_12 from "@/assets/img/update/team/character-12.jpg"
import character_13 from "@/assets/img/update/team/character-13.jpg"
import character_14 from "@/assets/img/update/team/character-14.jpg"
import character_15 from "@/assets/img/update/team/character-15.jpg"
import character_16 from "@/assets/img/update/team/character-16.jpg"
import character_17 from "@/assets/img/update/team/character-17.jpg"
import character_18 from "@/assets/img/update/team/character-18.jpg"
import character_19 from "@/assets/img/update/team/character-19.jpg"
import character_20 from "@/assets/img/update/team/character-20.jpg"

interface DataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   designasion: string;
}

const founder_data: DataType[] = [
   {
      id: 1,
      thumb: character_1,
      title: "Alexa Starfire",
      designasion: "A passionate dreamer, ready to embrace any of your fantasies.",
   },
   {
      id: 2,
      thumb: character_2,
      title: "Camilla Storm",
      designasion: "A refined conversationalist who knows how to turn a chat into an art form.",
   },
   {
      id: 3,
      thumb: character_3,
      title: "Selena Frost",
      designasion: "A playful flirt, always ready to add a spark to any conversation.",
   },
   {
      id: 4,
      thumb: character_4,
      title: "Diana Velvet",
      designasion: "A mysterious romantic soul, waiting to share her secrets with you.",
   },
   {
      id: 5,
      thumb: character_5,
      title: "Lana Gold",
      designasion: "A bold coquette who knows how to make every moment unforgettable.",
   },
   {
      id: 6,
      thumb: character_6,
      title: "Ruby Nightingale",
      designasion: "A confident beauty, capable of captivating at first glance.",
   },
   {
      id: 7,
      thumb: character_7,
      title: "Bella Moon",
      designasion: "A sensitive dreamer, ready to listen and support you in any situation.",
   },
   {
      id: 8,
      thumb: character_8,
      title: "Sophie Snow",
      designasion: "A vibrant adventurer who can turn any conversation into a true adventure.",
   },
   {
      id: 9,
      thumb: character_9,
      title: "Clara Skye",
      designasion: "A cool enigma with a sharp tongue and sharper mind—every word hits home and keeps you guessing.",
   },
   {
      id: 10,
      thumb: character_10,
      title: "Vanessa Сrystal",
      designasion: "Fiery and confident—her words spark desire and draw you in.",
   },
   {
      id: 11,
      thumb: character_11,
      title: "Mia Foxx",
      designasion: "Gentle flirtation, sophistication, and passion.",
    },
    {
      id: 12,
      thumb: character_12,
      title: "Samantha Jade",
      designasion: "Playfulness, spring breeze, and mystery.",
    },
    {
      id: 13,
      thumb: character_13,
      title: "Aurora Flame",
      designasion: "Soft confidence, candor, and passion.",
    },
    {
      id: 14,
      thumb: character_14,
      title: "Amber Blaze",
      designasion: "Fiery flirtation, mystery, and sparks of passion.",
    },
    {
      id: 15,
      thumb: character_15,
      title: "Ella Bliss",
      designasion: "Grace, allure, and captivating music.",
    },
    {
      id: 16,
      thumb: character_16,
      title: "Olivia Skye",
      designasion: "Warm whispers, comfort, and desire.",
    },
    {
      id: 17,
      thumb: character_17,
      title: "Tiffany Rose",
      designasion: "Refined allure, softness, and comfort.",
    },
    {
      id: 18,
      thumb: character_18,
      title: "Aiko Hana",
      designasion: "Gentle flirtation, warmth, and sensuality.",
    },
    {
      id: 19,
      thumb: character_19,
      title: "Yumi Asuka",
      designasion: "Spicy aroma, passion, and magic.",
    },
    {
      id: 20,
      thumb: character_20,
      title: "Rina Takara",
      designasion: "Jasmine whispers, magic, and desire.",
    }
]

const TeamFounder = () => {
   return (
      <div className="pb-60">
         <div className="container">
            <div className="section-title text-center mb-50">
               <h2 className="title style2">Those Ready to Share Your Desires</h2>
               <p className="sec-text">Each companion is something special: a unique style, character, and secrets. Choose the one who attracts you the most and start an exciting dialogue right now.
               </p>
            </div>
            <div className="row gy-4 justify-content-center">
               {founder_data.map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className="founder-card">
                        <div className="founder-card-img">
                           <Image className="" src={item.thumb} alt="img" />
                        </div>
                        <div className="founder-card-details">
                           <h3 className="founder-card-title">{item.title}</h3>
                           <p className="founder-card-desig">{item.designasion}</p>
                           <div className="">
                              <Link href="https://t.me/AmoriaChat_bot/amoria" className="btn btn2" >
                                 Start dialogue
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default TeamFounder
