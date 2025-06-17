// components/PopupModal.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PopupModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show the popup on every page load
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 overflow-hidden transform transition-all duration-300 ease-in-out animate-zoomIn">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="p-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-green-800 mb-4">
            New Project (Astana Residence)
          </h2>

          <Image
            src="../../../assets/001.jpg"
            alt="New Project"
            width={500}
            height={300}
            className="w-full h-auto rounded-md mb-5 shadow-md"
          />

          <Link
            href=""
            target="_blank"
            className="inline-block px-6 py-3 bg-[#f8a428] hover:bg-green-800 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition duration-300"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}
