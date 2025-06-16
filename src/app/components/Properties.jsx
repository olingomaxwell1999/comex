"use client";
import React, { useEffect } from "react";
import nyayoone from "../../../assets/One Bedroom Sitting-COMEXHOMES-NYAYO-VIEW-SUITES.jpeg";
import nyayotwo from "../../../assets/Lounge_angle 3.jpg";
import balozi from "../../../assets/balozieight.jpg";
import reveal from "../../../assets/Reveal rooftop (1).jpg";
import astanaresidence from "../../../assets/001.jpg";
import ModernCard from "./ModernCard";
import AOS from "aos";
import "aos/dist/aos.css";

function Properties() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  const propertyFeatures = [
    {
      id: 1,
      title: "Nyayo View Suites One",
      image: nyayoone,
      location: "Nairobi West",
      availablesuits: "Executive Studios and 1 Bedrooms",
      link: "https://www.nyayoviewsuites.com/nyayoone",
      units: "Sold Out",
    },
    {
      id: 2,
      title: "Nyayo View Suites Two",
      image: nyayotwo,
      location: "Nairobi West",
      availablesuits: "Executive & Premium One Bedrooms",
      link: "https://www.nyayoviewsuites.com/",
      units: "Available Units",
    },
    {
      id: 3,
      title: "Balozi Suites",
      image: balozi,
      location: "South B",
      availablesuits: "Executive Studios and One Bedrooms",
      link: "https://www.balozisuites.com/",
      units: "Available Units",
    },
    {
      id: 4,
      title: "The Reveal",
      image: reveal,
      location: "Kabarnet Road",
      availablesuits: "Studio, 1 Bedroom Apartments",
      link: "https://www.thereveal.co.ke/",
      units: "Available Units",
    },
    {
      id: 5,
      title: "Astana Residence",
      image: astanaresidence,
      location: "Ngara, Nairobi",
      availablesuits: "Studios, 1 Bedroom Apartments",
      link: "https://www.astanaresidence.com/",
      units: "Coming Soon",
    },
  ];

  return (
    <div data-aos="fade-up" className="mordernCardArea marginBottom">
      <div className="proper-head">
        <h2 className="properties-heading">Our Properties</h2>
        <hr />
      </div>
      <div className="modernCardContainer marginBottom">
        {propertyFeatures.map((propertyFeature) => (
          <ModernCard
            key={propertyFeature.id}
            title={propertyFeature.title}
            image={propertyFeature.image}
            location={propertyFeature.location}
            availablesuits={propertyFeature.availablesuits}
            link={propertyFeature.link}
            units={propertyFeature.units}
          />
        ))}
      </div>
    </div>
  );
}

export default Properties;
