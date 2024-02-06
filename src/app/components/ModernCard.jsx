import React from "react";
import { GoStar } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

function ModernCard({ title, location, image, availablesuits, link, units }) {
  return (
    <div className="modernCard mr-5 mb-5">
      <div className="imagearea">
        <Image src={image} alt="nyayo estate" />
      </div>
      <div className="textarea p-3">
        <div className="projecttitle">
          <h3>{title} </h3>
        </div>

        <div className="ratings">
          <AiFillStar className="iconproject" />
          <AiFillStar className="iconproject" />
          <AiFillStar className="iconproject" />
          <AiFillStar className="iconproject" />
          <AiFillStar className="iconproject" />
        </div>

        <div className="location">
          <MdLocationOn className="iconlocation" />
          <h3>{location}</h3>
        </div>

        <div className="availabe">
          <h3>{units}</h3>
          <p>{availablesuits}</p>
        </div>
        <hr className="marginTop" />

        <div className="buttonarea mt-1">
          <Link target="_blank" href={link}>
            <button className="btn marginTop">Visit Property</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ModernCard;
