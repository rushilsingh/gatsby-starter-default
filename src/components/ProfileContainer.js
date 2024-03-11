import React from "react";
import { educationEntries, experienceEntries } from "../constants/Entries";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileImage from "./ProfileImage";
import Bio from "./Bio";
import Resume from "./Resume";
import SocialFollow from "./socialfollow";
import "./ProfileContainer.css";
import EducationEntry from './EducationEntry';
import ExperienceEntry from './ExperienceEntry';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


export default function ProfileContainer() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <IoIosArrowBack className="slick-prev" />,
    nextArrow: <IoIosArrowForward className="slick-next" />,
  };

  return (
    <div className="row" style={{ padding: "0 1rem" }}>
      <div className="col-sm-4" style={{  padding: "1rem" }}>
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
                  <div key={index} style={{ height: "auto", overflow: "hidden" }}>
                    <ExperienceEntry entry={item} />
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
                <div key={index} style={{ height: "auto", overflow: "hidden" }}>
                  <EducationEntry entry={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
