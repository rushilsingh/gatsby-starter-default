import React from "react";
import EducationEntry from "./EducationEntry";
import { educationEntries } from "../constants/Entries";
export default function Education() {
  return (
    <div>
      {educationEntries.map((entry, index) => (
        <EducationEntry
          key={index}
          logo={entry.instituteLogo}
          heading={entry.degree}
          subject={`${entry.major} - ${entry.specialization}`}
          institute={entry.instituteName}
          graduated={entry.graduationYear}
          location={entry.location}
          description={entry.description}
          width={entry.width}
        />
      ))}
    </div>
  );
}

