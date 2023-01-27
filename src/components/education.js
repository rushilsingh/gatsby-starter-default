import React from "react"
import ubc from "../images/ubc.png"
import dosco from "../images/dosco.png"
import { EducationEntry } from "./entries"
function Education() {
  return (
    <button class="accordion">
      {EducationEntry("Bachelor of Science", "Cognitive Systems", "Computational Intelligence and Design", ubc, "University of British Columbia", "2016", "Vancouver, British Columbia, Canada",
        ["Cognitive Systems is a multidisciplinary program, a combination of the fields of Computer Science, Philosophy, Psychology, Neuroscience, and Linguistics with different streams emphasizing certain fields.",
          "The Computational Intelligence and Design stream emphasises Computer Science more so than the other adjacent and overlapping domains."])}

      {EducationEntry("Indian School Certificate", null, null, dosco, "The Doon School", "2008", "Dehradun, Uttarakhand, India", ["Physics, Chemistry, Mathematics, Computer Science, English"])}
    </button>
  )
}

export default Education
