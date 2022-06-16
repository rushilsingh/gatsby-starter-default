import React from "react"
import Education from "./education"
import Experience from "./experience"

function Right() {
  return (
    <div class="col">
      <div>
        <button class="accordion">
          <Experience />
        </button>
        <button class="accordion">
          <Education />
        </button>
      </div>
    </div>
  )
}

export default Right
