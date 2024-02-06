"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function Getproperty() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div data-aos="fade-up" className="get-property">
      <h1 className="properties-heading">
        GET YOUR PROPERTY NOW IN THE HEART OF NAIROBI
        <br /> WITH HIGH RETURNS
      </h1>

      {/* <hr className="getline" /> */}

      <p className="content">
        Our properties are strategically situated in prime locations in Nairobi
        with state-of-the-art conveniences and ultra-luxurious amenities.
        <br /> <br />
        Choose from our spectacular range of iconic properties in Nairobi
        starting from 2.2M.
      </p>

      <h2 className="properties-heading">9% - 15% GUARANTEED</h2>

      <div className="schedule-meet">
        <div className="texmex">
          <h2>Executive Studios and One BedRooms </h2>
          <h3>Starting from Ksh 2.2M </h3>
        </div>

        <Link
          href="https://forms.zohopublic.com/balozi/form/PropertyInterest/formperma/A33a_iR2K9mYWoQm68L3X_NCve97H84-YitBPSETT7o"
          target="_blank"
        >
          <button className="btn">register interest</button>
        </Link>
      </div>
    </div>
  );
}

export default Getproperty;
