"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function MapComponent() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div data-aos="fade-up" className="w-full h-[450px]">
      <iframe
        title="Comex homes location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8068112995834!2d36.80319837426554!3d-1.2901943356289232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13989a2e3bdb%3A0x9bba1ce0e400c709!2sComex%20Homes!5e0!3m2!1sen!2ske!4v1692446275404!5m2!1sen!2ske"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapComponent;
