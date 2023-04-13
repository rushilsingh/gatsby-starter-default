import React from "react";
import EntryCard from "./EntryCard";
import { educationEntries, experienceEntries } from "../constants/Entries";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileImage from "./ProfileImage";
import Bio from "./Bio";
import Resume from "./Resume";
import SocialFollow from "./socialfollow";
import "./ProfileContainer.css";

function formatDate(date) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
}

export default function ProfileContainer() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: (
      <button className="slick-arrow slick-prev">
        <span className="material-icons">arrow_back</span>
      </button>
    ),
    nextArrow: (
      <button className="slick-arrow slick-next">
        <span className="material-icons">arrow_forward</span>
      </button>
    ),
  };

  const slideHeight = "auto"; // Adjust the height to match .entry-card
  
  return (
    <div className="row" style={{ padding: "0 1rem" }}>
      <div className="col-sm-4" style={{ backgroundColor: "#a9a9a9", padding: "1rem" }}>
        <div className="sticky-top text-center">
          <ProfileImage />
          <Resume />
          <Bio />
          <SocialFollow />
        </div>
      </div>
      <div className="col-sm-8" style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1 }}>
          <h3>Experience</h3>
          <div className="slider-wrapper" style={{ height: "100%" }}>
            <Slider {...settings}>
              {experienceEntries.map((item, index) => {
                return (
                  <div key={index} style={{ height: slideHeight, overflow: "hidden" }}>
                    <EntryCard
                      type="experience"
                      logo={item.companyLogo}
                      heading={item.jobTitle}
                      subHeading={item.company}
                      details={[
                        `${formatDate(item.startDate)} - ${item.endDate ? formatDate(item.endDate) : "Present"}${item.duration ? ` (${item.duration})` : ""}`,
                        item.location,
                        item.description,
                      ]}
                      width={item.width}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Education</h3>
          <div className="slider-wrapper" style={{ height: "100%" }}>
            <Slider {...settings}>
              {educationEntries.map((item, index) => (
                <div key={index} style={{ height: slideHeight, overflow: "hidden" }}>
                  <EntryCard
                    type="education"
                    logo={item.instituteLogo}
                    heading={item.degree}
                    subHeading={`${item.major} - ${item.specialization}`}
                    details={[
                      `${item.instituteName}`,
                      `Graduated: ${item.graduationYear}`,
                      `${item.location}`,
                      `${item.description}`,
                    ]}
                    width={item.width}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
   
}
