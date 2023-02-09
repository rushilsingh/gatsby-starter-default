
import React from "react"
import EducationEntry from "./EducationEntry"
export default function Education(props) {
  return (
    <button class="accordion">
    {props.items.map((item) => <EducationEntry logo={item.logo} heading={item.heading} subject={item.subject} subject_description={item.subject_description} graduated={item.graduated} location={item.location} descriptions={item.descriptions} width={item.width}/>)}
    </button>
  )
}
