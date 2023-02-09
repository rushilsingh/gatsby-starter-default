import React from "react"
import ExperienceEntry from "./ExperienceEntry"
export default function Experience(props) {
  return (
    <button class="accordion">
      {props.items.map((item) => <ExperienceEntry logo={item.logo} title={item.title} companies={item.companies} from={item.from} to={item.to} location={item.location} descriptions={item.descriptions} duration={item.duration} width={item.width}/>)}

    </button >
  )
}

