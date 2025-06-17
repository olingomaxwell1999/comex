import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export default function ModernCard({
  title,
  location,
  image,
  availablesuits,
  link,
  units,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Text Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* Ratings */}
        <div className="flex text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} size={18} />
          ))}
        </div>

        {/* Location */}
        <div className="flex items-center text-black text-sm mb-3">
          <MdLocationOn className="mr-1" />
          <span>{location}</span>
        </div>

        {/* Units Info */}
        <div className="mb-3">
          <h4
            className={`font-medium text-sm ${
              units === "Sold Out" ? "text-red-500" : "text-green-600"
            }`}
          >
            {units}
          </h4>
          <p className="text-gray-700 text-sm">{availablesuits}</p>
        </div>

        <hr className="my-3" />

        {/* Button */}
        <div className="mt-2">
          <Link href={link} target="_blank">
            <button className="w-full bg-[#f8a428] text-white py-2 px-4 rounded transition-colors">
              Visit Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
