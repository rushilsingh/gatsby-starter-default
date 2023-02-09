import React from "react"
import Logo from "./Logo"
export default function ExperienceEntry(props) {
  return (
    <div class="card">
      {Logo(props.logo, props.width)}
      <ul>
        <li>
          <h4>{props.title}</h4>
          <ul>
            {props.companies.map((company) => <li>{company}</li>)}

            <li> {props.from} - {props.to}  {props.duration ? props.duration : ""} </li>
            <li> {props.location} </li>
            <ul>
              {props.descriptions.map((description) => <li>{description}</li>)}
            </ul>

          </ul>
        </li>
      </ul>
    </div>)
}

