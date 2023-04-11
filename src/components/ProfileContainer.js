import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import { ExperienceEntries, EducationEntries } from "../constants/Entries";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileImage from "./ProfileImage";
import Bio from "./Bio";
import SocialFollow from "./socialfollow";
import Resume from "./Resume";

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
              {ExperienceEntries.map((item, index) => (
                <div key={index} style={{ height: slideHeight, overflow: "hidden" }}>
                  <Experience item={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Education</h3>
          <div className="slider-wrapper" style={{ height: "100%" }}>
            <Slider {...settings}>
              {EducationEntries.map((item, index) => (
                <div key={index} style={{ height: slideHeight, overflow: "hidden" }}>
                  <Education item={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
