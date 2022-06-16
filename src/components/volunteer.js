import React from "react"
import cogs from "../images/cogs.png"

function Volunteer() {
  return (
    <>
      <h3 id="volunteer-experience">Volunteer Experience</h3>
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
    </>
  )
}

export default Volunteer
