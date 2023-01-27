import React from "react"
import ubc from "../images/ubc.png"
import synamedia from "../images/synamedia.gif"
import volen from "../images/volen.png"
import acl from "../images/alten_calsoft_labs.png"
import cogs from "../images/cogs.png"
import { ExperienceEntry } from "./entries"

function Experience() {
  return (
    <button class="accordion">
      {ExperienceEntry(synamedia, "Software Engineer", ["Synamedia"], "Feb 2020", "Present", "Bengaluru, Karnataka, India", ["Cybersecurity, Anti-piracy and Addressable Advertising solutions for video content."])}
      {ExperienceEntry(volen, "Software Engineer", ["Volen Software Services"], "September 2018", "February 2020", "Bengaluru, Karnataka, India", ["Contractual work with clients developing bespoke software solutions."], "(6 months)", "150")}
      {ExperienceEntry(acl, "Software Engineer", ["Alten Calsoft Labs (now ACL Digital)"], "May 2016", "June 2019", "Bengaluru, Karnataka, India", ["Solutions for orchestrating network devices, appliances and virtual appliances in the SDN and NFV space."], "(2 years 2 months)", "150")}

      {ExperienceEntry(ubc, "Teaching Assistant", ["The University of British Columbia"], "January 2012", "April 2013", "Vancouver, British Columbia, Canada",
        [
          "Teaching Assistant (TA) in a third-year Cognitive Systems course (COGS 300)",
          "Served as a liaison between the students and the professor for feedback, troubleshooting and effective course administration",
          "Designed laboratory tasks and supervised laboratory sessions",
          "Updated and moderated the course website. Graded lab reports and examinations."]
        , "(4 months)", "100")}

      {ExperienceEntry(cogs, "Industry Relations Officer", ["Cognitive Systems Society", "The University of British Columbia"], "April 2012", "April 2014", "Vancouver, British Columbia, Canada",
        [
          "Executive member of the Cognitive Systems Society (CSS)",
          "Liaison between students and industry",
          "Aided and facilitated the smooth functioning of the Cognitive Systems Society, specifically the areas of career development and work opportunities",
          "Involved in organising the annual Tech Career Fair in 2012 and 2014.",
          "Activities included searching for potential employers, facilitating student engagement, as well as recruiting, training and managing a committee of volunteers.",
          "The Tech Career Fair is a major source of revenue for the Cognitive Systems Society and a strong networking opportunity for club members."
        ]
        , "(2 years)", "100", "The University of British Columbia")}
    </button >
  )
}

export default Experience
