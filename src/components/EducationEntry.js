import React from "react";
import Logo from "./Logo";

export default function EducationEntry(props) {
  return (
    <div className="card entry-card">
      <div className="logo-container">
        <Logo src={props.logo} alt={props.institute} width={props.width} />
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
            {props.description}
          </li>
        </ul>
      </div>
      <style jsx>{`
        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
        }

        .logo-container img {
          max-width: 100%;
        }

        @media screen and (max-width: 768px) {
          .card {
            flex-direction: column;
          }

          .logo-container {
            margin-right: 0;
            margin-bottom: 16px;
          }
        }
      `}</style>
    </div>
  );
}
