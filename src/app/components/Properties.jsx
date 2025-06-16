"use client";
import React, { useEffect } from "react";
import ModernCard from "./ModernCard";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images from your assets
import nyayoone from "../../../assets/One Bedroom Sitting-COMEXHOMES-NYAYO-VIEW-SUITES.jpeg";
import nyayotwo from "../../../assets/Lounge_angle 3.jpg";
import balozi from "../../../assets/balozieight.jpg";
import reveal from "../../../assets/Reveal rooftop (1).jpg";
import astanaresidence from "../../../assets/001.jpg";

export default function Properties() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

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
      link: "https://www.balozisuites.com/", 
      units: "Coming Soon",
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
    <section className="py-12 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Our Properties</h2>
          <hr className="w-24 mx-auto mt-2 border-t-2 border-blue-500" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyFeatures.map((property) => (
            <ModernCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}
