import React from "react";
import ExperienceEntry from "./ExperienceEntry";
import { experienceEntries } from "../constants/Entries";
export default function Experience() {
  return (
    <div>
      {experienceEntries.map((entry, index) => (
        <ExperienceEntry
          key={index}
          logo={entry.companyLogo}
          title={entry.jobTitle}
          companies={[entry.company]}
          from={entry.startDate}
          to={entry.endDate}
          location={entry.location}
          description={entry.description}
          duration={entry.duration}
          width={entry.width}
        />
      ))}
    </div>
  );
}
