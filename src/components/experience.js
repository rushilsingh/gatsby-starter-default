import React from "react"
import synamedia from "../images/synamedia.gif"
import volen from "../images/volen.png"
import acl from "../images/alten_calsoft_labs.png"
import ubc from "../images/ubc.png"
import { ExperienceEntry } from "./entries"

function Experience() {
  return (
    <button class="accordion">
      {ExperienceEntry(synamedia, "Software Engineer", ["Synamedia"], "Feb 2020", "Present", "Bengaluru, Karnataka, India", ["Cybersecurity, Anti-piracy and Addressable Advertising solutions for video content."])}
      {ExperienceEntry(volen, "Software Engineer", ["Volen Software Services"], "September 2019", "February 2020", "Bengaluru, Karnataka, India", ["Contractual work with clients developing bespoke software solutions."], "(6 months)", "150")}
      {ExperienceEntry(acl, "Software Engineer", ["Alten Calsoft Labs (now ACL Digital)"], "May 2017", "June 2019", "Bengaluru, Karnataka, India", ["Solutions for orchestrating network devices, appliances and virtual appliances in the SDN and NFV space."], "(2 years 2 months)", "150")}
      {ExperienceEntry(ubc, "Teaching Assistant", ["The University of British Columbia"], "January 2013", "April 2013", "Vancouver, British Columbia, Canada",
        ["Served as a liaison between the students and the professor for feedback, troubleshooting and effective course administration",
          "Designed learning activities and graded deliverables."], "(4 months)", "100")}
    </button >
  )
}

export default Experience
