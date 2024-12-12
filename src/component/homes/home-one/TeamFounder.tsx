import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import founder_thumb_1 from "@/assets/img/update/team/founder-1-1.png"
import founder_thumb_2 from "@/assets/img/update/team/founder-1-2.png"

interface DataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   designasion: string
}[];

const founder_data: DataType[] = [
   {
      id: 1,
      thumb: founder_thumb_1,
      title: "Alice",
      designasion: "a passionate dreamer, ready to support any of your fantasies",
   },
   {
      id: 2,
      thumb: founder_thumb_2,
      title: "Aliceo",
      designasion: "a passionate dreamer, ready to support any of your fantasies",
   },
   {
      id: 3,
      thumb: founder_thumb_1,
      title: "Aliceo",
      designasion: "a passionate dreamer, ready to support any of your fantasies",
   },
   {
      id: 4,
      thumb: founder_thumb_2,
      title: "Aliceo",
      designasion: "a passionate dreamer, ready to support any of your fantasies",
   },
   {
      id: 5,
      thumb: founder_thumb_1,
      title: "Aliceo",
      designasion: "a passionate dreamer, ready to support any of your fantasies",
   },
   {
      id: 6,
      thumb: founder_thumb_2,
      title: "Aliceo",
      designasion: "a passionate dreamer, ready to support any of your fantasies",
   },
   {
      id: 7,
      thumb: founder_thumb_1,
      title: "Aliceo",
      designasion: "a passionate dreamer, ready to support any of your fantasies",
   },
   {
      id: 8,
      thumb: founder_thumb_2,
      title: "Aliceo",
      designasion: "a passionate dreamer, ready to support any of your fantasies",
   },
   {
      id: 9,
      thumb: founder_thumb_1,
      title: "Aliceo",
      designasion: "a passionate dreamer, ready to support any of your fantasies",
   },
   {
      id: 10,
      thumb: founder_thumb_2,
      title: "Aliceo",
      designasion: "a passionate dreamer, ready to support any of your fantasies",
   },
]

const TeamFounder = () => {
   return (
      <div className="pb-110">
         <div className="container">
            <div className="section-title text-center mb-50">
               <h2 className="title style2">Those ready to share your desires</h2>
               <h3 className="hero-subtitle style2">Each companion is something special: a unique style, character, and secrets. Choose the one who attracts you the most and start an exciting dialogue right now.
               </h3>
            </div>
            <div className="row gy-4 justify-content-center">
               {founder_data.map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className="founder-card">
                        <div className="founder-card-img">
                           <Image src={item.thumb} alt="img" />
                        </div>
                        <div className="founder-card-details">
                           <h3 className="founder-card-title">{item.title}</h3>
                           <p className="founder-card-desig">{item.designasion}</p>
                           <div className="">
                              <Link href="/contact" className="btn btn2" >
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
