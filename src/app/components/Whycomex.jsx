"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowDownCircle } from "react-icons/fi";
import Image from "next/image";
import Balozi from "../../../assets/Lounge_angle 1.jpg";
import ReasonBox from "./ReasonBox";

function Whycomex() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  const reasons = [
    {
      id: 1,
      title: "9% - 15% GUARANTEED",
      description:
        "We help you achieve consistent and above market guaranteed returns at 9% - 15% net per annum via ownership of a premium real estate property.",
    },
    {
      id: 2,
      title: "GET HASSLE FREE MANAGEMENT",
      description:
        "Comex Homes does the work for you! We look for tenants, collect rent and manage the unit on your behalf. Yours is to monitor your investment.",
    },
    {
      id: 3,
      title: "GET FLEXIBLE PAYMENT PLAN",
      description:
        "A deposit of 25% to be made upon signing the offer letter Balance payable within 24 months.",
    },
  ];

  return (
    <div data-aos="fade-up">
      <section className="why-comex">
        <div className="head">
          <h1>Why Comex Homes</h1>
          {/* <hr className="center-line" /> */}
          <h2>Reasons To Invest In Real Estate With Us</h2>
        </div>

        <div className="why-comex-content">
          <div className="why-comex-text">
            {reasons.map((reason) => (
              <ReasonBox
                key={reason.id}
                title={reason.title}
                description={reason.description}
              />
            ))}
          </div>
          <div className="why-comex-text">
            <Image
              className="video"
              src={Balozi}
              priority="true"
              alt="Balozi Suites"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Whycomex;
