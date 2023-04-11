import React from "react";
import Logo from "./Logo";

export default function EducationEntry(props) {
  return (
    <div className="card entry-card">
      <div className="logo-container">
        {Logo(props.logo, props.width)}
      </div>
      <div className="content-container">
        <h3>{props.heading}</h3>
        <h4>
          {props.subject} -<br /> {props.subject_description}
        </h4>
        <h4>{props.institute}</h4>
        <ul>
          <li>Graduated: {props.graduated}</li>
          <li>
            {props.location}
            <ul>
              {props.descriptions.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
