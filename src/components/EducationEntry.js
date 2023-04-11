import React from "react";
import Logo from "./Logo";

export default function EducationEntry(props) {
  return (
    <div className="card entry-card">
      <div className="logo-container">
        <Logo src={props.logo} width={props.width} alt={props.institute} />
      </div>
      <div className="content-container">
        <h2 className="education-entry-heading">{props.heading}</h2>
        <h3 className="education-entry-subject">{props.subject}</h3>
        <p className="education-entry-subject-description">{props.subject_description}</p>
        <h4 className="education-entry-institute">{props.institute}</h4>
        <ul className="education-entry-details">
          <li>
            <span className="education-entry-detail-label">Graduated:</span>
            <span className="education-entry-detail-value">{props.graduated}</span>
          </li>
          <li>
            <span className="education-entry-detail-label">Location:</span>
            <span className="education-entry-detail-value">{props.location}</span>
          </li>
          <li>
            <span className="education-entry-detail-label">Description:</span>
            <span className="education-entry-detail-value">{props.description}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
