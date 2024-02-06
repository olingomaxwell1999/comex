import React from "react";
import Selection from "../../../assets/select.png";
import Payment from "../../../assets/payment.png";
import Update from "../../../assets/update.png";
import Handover from "../../../assets/handover.png";
import Management from "../../../assets/management.png";
import Image from "next/image";

function Process() {
  const processes = [
    {
      id: 1,
      title: "Selection",
      content: "Search, identify and select your preferred unit.",
      image: Selection,
    },
    {
      id: 2,
      title: "Payment",
      content:
        "A deposit of 25% to be made upon signing the offer letter. Balance payable within 24 months.",
      image: Payment,
    },
    {
      id: 3,
      title: "Update",
      content:
        "We will keep you updated with the progress of your unit, walk you through crucial completion stages, and answer any questions that you may have.",
      image: Update,
    },
    {
      id: 4,
      title: "Handover",
      content:
        "Upon completion, the investor and developer will do a checklist of unit hand over and officially hand it over upon signing hand over agreement.",
      image: Handover,
    },
    {
      id: 5,
      title: "Management",
      content:
        "Comex Homes does the work for you! We look for tenants, collect rent and manage the unit on your behalf. Yours is to monitor your investment.",
      image: Management,
    },
  ];

  return (
    <article className="py-14">
      <section>

        <div className="text-heading">
            <h1>Our Process</h1>
        </div>
        
        <div className="process-container">
          {processes?.map((process) => (
            <div
              key={process.id}
              className="h-full d-flex flex-column align-items-center align-self-center snap-center min-w-[70%] sm:min-w-[48%] md:win-w-[30%] lg:min-w-[22%] processInn"
            >
              <Image
                src={process.image}
                className="h-16"
                alt="comex homes process selection"
              />
              <br />
              <div className="w-full">
                <h1 className="text-3xl">{process.title}</h1>
                <div
                  className="text-md text-white"
                  dangerouslySetInnerHTML={{ __html: process.content }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export default Process;
