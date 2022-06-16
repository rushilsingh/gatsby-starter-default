import React from "react"
import ubc from "../images/ubc.png"
import dosco from "../images/dosco.png"

function Education() {
  return (
    <>
      <h2 id="education">Education</h2>
      <div id="bsc" class="card">
        <h3 id="bachelor-of-science">Bachelor of Science</h3>
        <h4 id="cognitive-systems">
          Cognitive Systems -<br /> Computational Intelligence and Design
        </h4>
        <p>
          <img class="logo" src={ubc} height="auto" width="100" />
        </p>
        <h4 id="the-university-of-british-columbia-1">
          The University of British Columbia
        </h4>
        <ul>
          <li>Graduated: 2015</li>
          <li>
            Vancouver, British Columbia, Canada
            <ul>
              <li>
                Cognitive Systems is a multidisciplinary program, a combination
                of the fields of Computer Science, Philosophy, Psychology,
                Neuroscience, and Linguistics.
              </li>
              <li>Different streams emphasize certain fields more heavily.</li>
              <li>
                The Computational Intelligence and Design stream emphasises
                Computer Science more so than the other adjacent and overlapping
                domains.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="isc" class="card">
        <h3 id="indian-school-certificate">Indian School Certificate</h3>
        <p>
          <img class="logo" src={dosco} height="auto" width="100" />
        </p>
        <h4 id="the-doon-school">The Doon School</h4>
        <ul>
          <li>Graduated: 2008</li>
          <li>Dehradun, Uttarakhand, India</li>
          <li>Physics, Chemistry, Mathematics, Computer Science, English</li>
        </ul>
      </div>
      <h2 id="education">Education</h2>
      <div id="bsc" class="card">
        <h3 id="bachelor-of-science">Bachelor of Science</h3>
        <h4 id="cognitive-systems">
          Cognitive Systems -<br /> Computational Intelligence and Design
        </h4>
        <p>
          <img class="logo" src={ubc} height="auto" width="100" />
        </p>
        <h4 id="the-university-of-british-columbia-1">
          The University of British Columbia
        </h4>
        <ul>
          <li>Graduated: 2015</li>
          <li>
            Vancouver, British Columbia, Canada
            <ul>
              <li>
                Cognitive Systems is a multidisciplinary program, a combination
                of the fields of Computer Science, Philosophy, Psychology,
                Neuroscience, and Linguistics.
              </li>
              <li>Different streams emphasize certain fields more heavily.</li>
              <li>
                The Computational Intelligence and Design stream emphasises
                Computer Science more so than the other adjacent and overlapping
                domains.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="isc" class="card">
        <h3 id="indian-school-certificate">Indian School Certificate</h3>
        <p>
          <img class="logo" src={dosco} height="auto" width="100" />
        </p>
        <h4 id="the-doon-school">The Doon School</h4>
        <ul>
          <li>Graduated: 2008</li>
          <li>Dehradun, Uttarakhand, India</li>
          <li>Physics, Chemistry, Mathematics, Computer Science, English</li>
        </ul>
      </div>
    </>
  )
}

export default Education
