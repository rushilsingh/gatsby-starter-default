import React from "react"
import Logo from "./Logo"
export default function EducationEntry(heading, logo, institute, graduated, location, descriptions = [], subheading = null, subheading_description = null) {
  return (<div class="card">
    <h3>{heading}</h3>
    {subheading ? <h4>
      {subheading} -<br /> {subheading_description}
    </h4> : ""}
    {Logo(logo, "100")}
    <h4>{institute}</h4>
    <ul>
      <li>Graduated: {graduated}</li>
      <li>
        {location}
        <ul>
          {descriptions.map((description) => <li><h5>{description}</h5></li>)}
        </ul>
      </li>
    </ul>
  </div>
  )
}