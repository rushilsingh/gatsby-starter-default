import React from "react"
import Logo from "./Logo"

export default function EducationEntry(props) {
  return (<div class="card">
    <h3>{props.heading}</h3>
    <h4>
      {props.subject} -<br /> {props.subject_description}
    </h4>
    {Logo(props.logo, props.width)}
    <h4>{props.institute}</h4>
    <ul>
      <li>Graduated: {props.graduated}</li>
      <li>
        {props.location}
        <ul>
          {props.descriptions.map((description) => <li>{description}</li>)}
        </ul>
      </li>
    </ul>
  </div>
  )
}