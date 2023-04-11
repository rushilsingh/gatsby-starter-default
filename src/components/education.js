import React from "react";
import EducationEntry from "./EducationEntry";

export default function Education({ item }) {
  return (
    <button class="accordion">
      <EducationEntry
        logo={item.logo}
        heading={item.heading}
        subject={item.subject}
        subject_description={item.subject_description}
        graduated={item.graduated}
        location={item.location}
        description={item.description}
        width={item.width}
      />
    </button>
  );
}
