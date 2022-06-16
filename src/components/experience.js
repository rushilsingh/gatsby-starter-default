import React from "react"
import ubc from "../images/ubc.png"
import synamedia from "../images/synamedia.gif"
import volen from "../images/volen.png"
import acl from "../images/alten_calsoft_labs.png"
import cogs from "../images/cogs.png"

function Experience() {
  return (
    <button class="accordion">
      <div id="synamedia" class="card">
        <p>
          <img class="logo" src={synamedia} />
        </p>
        <ul>
          <li>
            <h4>Software Engineer</h4>
            <ul>
              <li>
                <h5>Synamedia</h5>
              </li>
              <li>Feb 2020 - Present</li>
              <li>
                Bengaluru, Karnataka, India
                <ul>
                  <li>
                    Information Security, Intelligence and Data Engineering
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="volen" class="card">
        <p>
          <img class="logo" src={volen} width="150" height="auto" />
        </p>
        <ul>
          <li>
            <h4>Software Engineer</h4>
            <ul>
              <li>
                <h5>Volen Software Services</h5>
              </li>
              <li>September 2018 - February 2020 (6 months)</li>
              <li>Bengaluru, Karnataka, India</li>
              <li>Contractual work with clients.</li>
              <li>
                Writing of Python code to support bespoke functionality that may
                be required.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="alten_calsoft_labs" class="card">
        <p>
          <img class="logo" src={acl} width="150" height="auto" />
        </p>
        <ul>
          <li>
            <h4>Software Engineer</h4>
            <ul>
              <li>
                <h5>Alten Calsoft Labs (now ACL Digital)</h5>
              </li>
              <li>May 2016 - June 2019 (2 years 2 months)</li>
              <li>
                Bengaluru, Karnataka, India
                <ul>
                  <li>
                    Managing orchestration of network devices, appliances and
                    virtual appliances.
                  </li>
                  <li>Working in the SDN and NFV space.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="ta" class="card">
        <p>
          <img class="logo" src={ubc} height="auto" width="100" />
        </p>
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
        <p>
          <img class="logo" src={cogs} height="auto" width="100" />
        </p>
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
                    facilitating student engagement, advertising, as well as
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
    </button>
  )
}

export default Experience
