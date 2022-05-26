import React from 'react';
import synamedia from '../images/synamedia.gif'
import dosco from '../images/dosco.png'
import ubc from '../images/ubc.png'
import volen from '../images/volen.png'
import cogs from '../images/cogs.png'
import acl from '../images/alten_calsoft_labs.gif'

const Right = () => (

  <div class="col">
    <div>
      <h2 id="about">About</h2>
      <p>Rushil Singh is a quality-oriented software engineering professional, with over 4 years of experience and proven knowledge of software development, working in the video technology domain with a focus on information security, intelligence gathering and data engineering.</p>
      <h2 id="career">Career</h2>

      <h3 id="professional-experience">Professional Experience</h3>

      <h4 id="synamedia">Synamedia</h4>
      <p><img class="logo" src={synamedia} /></p>
      <ul>
        <li>Software Engineer
          <ul>
            <li>Feb 2020 - Present</li>
            <li>Bengaluru, Karnataka, India
              <ul>
                <li>Information Security, Intelligence and Data Engineering</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h4 id="volen-software-services">Volen Software Services</h4>
      <p><img class="logo" src={volen} width="149" height="150" /></p>
      <ul>
        <li>Software Engineer
          <ul>
            <li>September 2018 - February 2020 (6 months)</li>
            <li>Bengaluru, Karnataka, India</li>
            <li>Contractual work with clients.</li>
            <li>Writing of Python code to support bespoke functionality that may be required.</li>
          </ul>
        </li>
      </ul>

      <h4 id="alten-calsoft-labs">Alten Calsoft Labs</h4>
      <p><img class="logo" src={acl} width="99" height="100" /></p>
      <ul>
        <li>Software Engineer
          <ul>
            <li>May 2016 - June 2019 (2 years 2 months)</li>
            <li>Bengaluru, Karnataka, India
              <ul>
                <li>Managing orchestration of network devices, appliances and virtual appliances.</li>
                <li>Working in the SDN and NFV space.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h4 id="the-university-of-british-columbia">The University of British Columbia</h4>
      <p><img class="logo" src={ubc} height="99" width="100" /></p>

      <ul>
        <li>Teaching Assistant
          <ul>
            <li>January 2012 - April 2013 (4 months)</li>
            <li>Vancouver, British Columbia, Canada
              <ul>
                <li>Teaching Assistant (TA) in a third-year Cognitive Systems course (COGS 299).</li>
                <li>Served as a liaison between the students and the professor for feedback, troubleshooting and effective course administration.</li>
                <li>Designed laboratory tasks and supervised laboratory sessions.</li>
                <li>Updated and moderated the course website. Graded lab reports and examinations.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h3 id="volunteer-experience">Volunteer Experience</h3>

      <h4 id="cognitive-systems-society-the-university-of-british-columbia">Cognitive Systems Society, The University of British Columbia</h4>

      <p><img class="logo" src={cogs} height="99" width="100" /></p>
      <ul>
        <li>Industry Relations Officer
          <ul>
            <li>April 2011 - April 2014 (2 years)</li>
            <li>Vancouver, British Columbia, Canada
              <ul>
                <li>Executive member of the Cognitive Systems Society (CSS).</li>
                <li>Liaison between students and industry.</li>
                <li>Aided and facilitated the smooth functioning of the Cognitive Systems Society, specifically the areas of career development and work opportunities.</li>
                <li>Involved in organising the annual Tech Career Fair in 2012 and 2014.</li>
                <li>Activities included searching for potential employers, facilitating student engagement, advertising, as well as recruiting, training and managing a committee of volunteers.</li>
                <li>The Tech Career Fair is a major source of revenue for the Cognitive Systems Society and a strong networking opportunity for club members.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2 id="education">Education</h2>

      <h3 id="bachelor-of-science---cognitive-systems">Bachelor of Science - <br /> Cognitive Systems</h3>
      <h4 id="computational-intelligence-and-design-stream">(Computational Intelligence and Design Stream)</h4>
      <h4 id="the-university-of-british-columbia-1">The University of British Columbia</h4>

      <p><img class="logo" src={ubc} height="99" width="100" /></p>
      <ul>
        <li>Graduated: 2015</li>
        <li>Vancouver, British Columbia, Canada
          <ul>
            <li>Cognitive Systems is a multidisciplinary program, a combination of the fields of Computer Science, Philosophy, Psychology, Neuroscience, and Linguistics.</li>
            <li>Different streams emphasize certain fields more heavily.</li>
            <li>The Computational Intelligence and Design stream emphasises Computer Science more so than the other adjacent and overlapping domains.</li>
          </ul>
        </li>
      </ul>

      <h3 id="indian-school-certificate">Indian School Certificate</h3>
      <h4 id="the-doon-school">The Doon School</h4>

      <p><img class="logo" src={dosco} height="99" width="100" /></p>
      <ul>
        <li>Graduated: 2008</li>
        <li>Dehradun, Uttarakhand, India</li>
        <li>Physics, Chemistry, Mathematics, Computer Science, English</li>
      </ul>
    </div></div>
);

export default Right;
