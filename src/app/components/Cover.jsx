"use client";
import Image from "next/image";
import cover from "../../../assets/Receptiopn.jpg";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Cover() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div data-aos="fade-up">
      <Image
        data-aos="fade-up"
        priority="true"
        className="coverimage"
        src={cover}
        height={500}
        alt="cover"
      />
    </div>
  );
}

export default Cover;
