import React from "react"
import Button from "react-bootstrap/Button"
import resume from "../images/Resume_RushilSingh.pdf"
export default function Resume() {
  return <Button
    variant="danger"
    href={resume}
    download="Resume - Rushil Singh"
  >
    Download Resume
  </Button>

}