import React from "react"
import { Accordion } from "react-bootstrap"
import AccordionBody from "react-bootstrap/esm/AccordionBody"
import Education from "./Education"
import Experience from "./Experience"
import {ExperienceEntries} from "../constants/ExperienceEntries"
export default function RightColumn(){
  return (
  <div class="col">
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Experience</Accordion.Header>
        <Accordion.Body>
          <Experience items={ExperienceEntries} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Education</Accordion.Header>
        <AccordionBody>
          <Accordion.Body>
            <Education />
          </Accordion.Body>
        </AccordionBody>
      </Accordion.Item>
    </Accordion>
  </div>
)

  }