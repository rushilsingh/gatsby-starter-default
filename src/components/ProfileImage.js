import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./ProfileImage.css";

export default function ProfileImage() {
  return (
    <div className="profile-image-container">
      <StaticImage
        className="profile-image"
        src="../images/rushilsingh.jpeg"
        width={300}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt="Rushil Singh"
      />
    </div>
  );
}
