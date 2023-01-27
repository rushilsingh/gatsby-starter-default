import React from "react"
import ubc from "../images/ubc.png"
import synamedia from "../images/synamedia.gif"
import volen from "../images/volen.png"
import acl from "../images/alten_calsoft_labs.png"
import cogs from "../images/cogs.png"
import { Logo, Entry } from "./components"


function Experience() {
  return (
    <button class="accordion">
      {Entry(synamedia, "Software Engineer", "Synamedia", "Feb 2020", "Present", "Bengaluru, Karnataka, India", "Cybersecurity, Anti-piracy and Addressable Advertising solutions for video content.")}
      {Entry(volen, "Software Engineer", "Volen Software Services", "September 2018", "February 2020", "Bengaluru, Karnataka, India", "Contractual work with clients developing bespoke software solutions.", "(6 months)", "150")}
      {Entry(acl, "Software Engineer", "Alten Calsoft Labs (now ACL Digital)", "May 2016", "June 2019", "Bengaluru, Karnataka, India", "Solutions for orchestrating network devices, appliances and virtual appliances in the SDN and NFV space.", "(2 years 2 months)", "150")}
      <div id="ta" class="card">
        {Logo(ubc, "100")}
        <ul>
          <li>
            <h4>Teaching Assistant</h4>
            <ul>
              <li>
                <h5>The University of British Columbia</h5>
              </li>
              <li>January 2012 - April 2013 (4 months)</li>
              <li>
                Vancouver, British Columbia, Canada
                <ul>
                  <li>
                    Teaching Assistant (TA) in a third-year Cognitive Systems
                    course (COGS 300).
                  </li>
                  <li>
                    Served as a liaison between the students and the professor
                    for feedback, troubleshooting and effective course
                    administration.
                  </li>
                  <li>
                    Designed laboratory tasks and supervised laboratory
                    sessions.
                  </li>
                  <li>
                    Updated and moderated the course website. Graded lab reports
                    and examinations.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="cogs_society" class="card">
        {Logo(cogs, "100")}
        <ul>
          <li>
            <h4>Industry Relations Officer</h4>
            <ul>
              <li>
                <h5>Cognitive Systems Society</h5>
              </li>
              <li>
                <h5>The University of British Columbia</h5>
              </li>
              <li>April 2011 - April 2014 (2 years)</li>
              <li>
                Vancouver, British Columbia, Canada
                <ul>
                  <li>
                    Executive member of the Cognitive Systems Society (CSS).
                  </li>
                  <li>Liaison between students and industry.</li>
                  <li>
                    Aided and facilitated the smooth functioning of the
                    Cognitive Systems Society, specifically the areas of career
                    development and work opportunities.
                  </li>
                  <li>
                    Involved in organising the annual Tech Career Fair in 2012
                    and 2014.
                  </li>
                  <li>
                    Activities included searching for potential employers,
                    facilitating student engagement, Addressable Advertising, as well as
                    recruiting, training and managing a committee of volunteers.
                  </li>
                  <li>
                    The Tech Career Fair is a major source of revenue for the
                    Cognitive Systems Society and a strong networking
                    opportunity for club members.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </button >
  )
}

export default Experience
