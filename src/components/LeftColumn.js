import React from "react"
import Button from "react-bootstrap/Button"
import { StaticImage } from "gatsby-plugin-image"
import resume from "../images/Resume_RushilSingh.pdf"
import SocialFollow from "./socialfollow"

export default function LeftColumn() {
  return (
    <div class="col-sm-3" style={{ backgroundColor: `#a9a9a9` }}>
      <div class="sticky-top text-center">
        <StaticImage
          src="../images/rushilsingh.jpeg"
          width={300}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="Rushil Singh"
          style={{ marginBottom: `1.45rem` }} />
        <Button
          variant="danger"
          href={resume}
          download="Resume - Rushil Singh"
        >
          Download Resume
        </Button>
        <br />
        <br />
        <p style={{ color: "white" }}><b></b>
          Experienced quality-oriented software engineer working on Cybersecurity, Anti-piracy and Addressable Advertising solutions for video content.
        </p>
        <br />
        <SocialFollow />
      </div>
    </div>
  )
}