import React from "react";
import Logo from "./Logo";

export default function ExperienceEntry(props) {
  return (
    <div className="card entry-card">
      <div className="logo-container">
        {Logo(props.logo, props.width)}
      </div>
      <ul className="content-container">
        <li>
          <h4>{props.title}</h4>
          <ul>
            {props.companies.map((company) => (
              <li key={company}>{company}</li>
            ))}
            <li>
              {props.from} - {props.to} {props.duration ? props.duration : ""}
            </li>
            <li>{props.location}</li>
            <ul>
              {props.descriptions.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          </ul>
        </li>
      </ul>
    </div>
  );
}
