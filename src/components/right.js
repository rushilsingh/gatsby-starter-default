import React from "react"
import { Accordion } from "react-bootstrap"
import AccordionBody from "react-bootstrap/esm/AccordionBody"
import Education from "./education"
import Experience from "./experience"
function Right() {
  return (
    <div class="col">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Experience</Accordion.Header>
          <Accordion.Body>
            <Experience />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Education</Accordion.Header>
          <AccordionBody>
            <Education />
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Right
