"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import TeamFounder from "./TeamFounder"
import team_data from "@/data/TeamData";
import Link from "next/link";

import team_bg from "@/assets/img/update/bg/bg-gradient1-1.jpg"

const Team = () => {

   return (
      <div className="wcu-area-1 pt-60 pb-60 position-relative" id="characters">
         <div className="bg-gradient-1">
            <Image src={team_bg} alt="img" />
         </div>
         <TeamFounder />

      </div>
   )
}

export default Team