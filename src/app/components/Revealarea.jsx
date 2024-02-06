"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function Revealarea() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div data-aos="fade-up" className="amenities-second">
      <div className="amenities-first-heading">
        <h3>Welcome To</h3>
        {/* <hr /> */}
        <h2>Comex Homes</h2>
      </div>
      <div className="amenities-first-text">
        <p>
          Comex Homes was purposefully incorporated with a focus to BUILD, SELL
          & MANAGE quality affordable housing in strategic locations with high
          rental yields. We transform areas into places where people want to
          live.Our effective project management skills together with our
          in-house material sourcing capability will enable us to build
          cost-efficient and deliver within the agreed timeline. What we do We
          Build ,We Manage, We Sell
        </p>
      </div>

      <div style={{ marginTop: "20px" }} className="btn-area">
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

export default Revealarea;
