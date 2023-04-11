import React from "react";
import Logo from "./Logo";

export default function ExperienceEntry(props) {
  return (
    <div className="card entry-card">
      <div className="logo-container">
        <Logo src={props.logo} width={props.width} alt={props.companies[0]} />
      </div>
      <div className="content-container">
        <h2 className="experience-entry-title">{props.title}</h2>
        <ul className="experience-entry-companies">
          {props.companies.map((company) => (
            <li key={company} className="experience-entry-company">{company}</li>
          ))}
        </ul>
        <p className="experience-entry-duration">
          {props.from} - {props.to} {props.duration ? `(${props.duration})` : ""}
        </p>
        <p className="experience-entry-location">{props.location}</p>
        <p className="experience-entry-description">{props.description}</p>
      </div>
    </div>
  );
}
