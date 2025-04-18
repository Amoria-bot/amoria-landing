import Image, { StaticImageData } from "next/image";

import choose_thumb_1 from "@/assets/img/update/bg/bg-gradient1-1.jpg"
import choose_thumb_2 from "@/assets/img/update/normal/why_1-1.png"

import icon_1 from "@/assets/img/update/icon/1.png"
import icon_2 from "@/assets/img/update/icon/2.png"
import icon_3 from "@/assets/img/update/icon/3.png"
import icon_4 from "@/assets/img/update/icon/4.png"
import team_2 from "@/assets/img/update/team/team-1.png";
import Link from "next/link";

interface DataType {
   id: number;
   title: string;
   price: string;
   skill: string;
   value: string;
   value_2: string;
}[];

interface DataType2 {
   id: number;
   icon: StaticImageData;
   title: string;
   price?: string;
   desc: string;
}[];

const amount_data: DataType[] = [
   {
      id: 1,
      title: "Expected FOX price",
      price: "0.36 $",
      skill: "70%",
      value: "100",
      value_2: "100,000",
   },
   {
      id: 2,
      title: "Expected FOX price",
      price: "0.36 $",
      skill: "80%",
      value: "100",
      value_2: "100,000",
   },
   {
      id: 3,
      title: "Calculation time",
      price: "Q3 2020",
      skill: "40%",
      value: "100",
      value_2: "100,000",
   },
];

const choose_data: DataType2[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Find someone who shares your fantasies",
      desc: "Courage and passion",
   },
   {
      id: 2,
      icon: icon_2,
      title: "See what your companion looks like even without clothes",
      desc: "Desire and temptation",
   },
   {
      id: 3,
      icon: icon_3,
      title: "Dive into dialogues without forbidden topics",
      desc: "Honesty and thrill",
   },
   {
      id: 4,
      icon: icon_4,
      title: "Express your desires freely and without judgment",
      desc: "Trust and liberation",
   },
]

const ChooseArea = () => {
   return (
      <div className="wcu-area-1 pt-60 pb-60 position-relative" id="features">
         <div className="">
         </div>
         <div className="container">
            <div className="section-title text-center mb-50">
               <h2 className="title style2">Your Fantasies — Without Limits</h2>
               <p className="sec-text">In Amoria, you’ll find characters who understand and embrace your every desire. Forget shyness — here, you’ll experience honest conversations, the freedom to express yourself, and the chance to see your companion the way you want.
               </p>
            </div>
            <div className="row gy-5 justify-content-between">
               <div className="col-lg-6" style={{ height: 'fit-content' }}>
                  <Image className="chose-area-image d-none d-md-block mt-100" src={team_2} alt="Team Image" style={{ transform: 'scale(1.3)' }}/>
                  <Image className="chose-area-image d-block d-md-none" src={team_2} alt="Team Image" style={{ transform: 'scale(1)' }}/>
               </div>
               <div className="col-lg-6 mt-lg-5 mt-0">
                  {choose_data.map((item) => (
                      <div key={item.id} className="feature-card">
                         <div className="feature-card-icon">
                            <Image src={item.icon} alt="img" />
                         </div>
                         <div className="feature-card-details">
                            <h4 className="feature-card-title">{item.title}</h4>
                            <p className="feature-card-text">{item.desc}</p>
                         </div>
                      </div>
                  ))}
               </div>

            </div>
         </div>
      </div>
   )
}

export default ChooseArea
