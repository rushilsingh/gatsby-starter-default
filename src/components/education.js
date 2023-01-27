import React from "react"
import ubc from "../images/ubc.png"
import { EducationEntry } from "./entries"
function Education() {
  return (
    <button class="accordion">
      {EducationEntry("Bachelor of Science", ubc, "University of British Columbia", "2016", "Vancouver, British Columbia, Canada",
        ["Cognitive Systems is a multidisciplinary program, a combination of the fields of Computer Science, Philosophy, Psychology, Neuroscience, and Linguistics with different streams emphasizing certain fields.",
          "The Computational Intelligence and Design stream emphasises Computer Science more so than the other adjacent and overlapping domains."], "Cognitive Systems", "Computational Intelligence and Design")}
    </button>
  )
}
export default Education
