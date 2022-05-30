import React from "react"
import Button from "react-bootstrap/Button"
import { StaticImage } from "gatsby-plugin-image"
import resume from "../images/Resume_RushilSingh.pdf"
import SocialFollow from "../components/socialfollow"

const Left = () => (
  <div class="col-sm-3 sticky-top text-center">
    <StaticImage
      src="../images/rushilsingh.jpeg"
      width={300}
      quality={100}
      formats={["auto", "webp", "avif"]}
      alt="Rushil Singh"
      style={{ marginBottom: `1.45rem` }}
    />
    <Button variant="secondary" href={resume} download="Resume - Rushil Singh">
      Download Resume
    </Button>
    <br /><br />
    <p>
      Rushil Singh is a quality-oriented software engineering professional with
      over 5 years of experience and proven knowledge of software development,
      working in the video technology domain with a focus on information
      security, intelligence gathering and data engineering.
    </p>
    <br />
    <SocialFollow />
  </div>
)
export default Left
