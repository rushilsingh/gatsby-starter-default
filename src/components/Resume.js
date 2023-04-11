import React from "react"
import resume from "../images/Resume_RushilSingh.pdf"
import "./ResumeButton.css"

export default function Resume() {
  return (
    <a href={resume} download="Resume - Rushil Singh">
      <button className="resume-download-button">
        Download Resume
      </button>
    </a>
  )
}
