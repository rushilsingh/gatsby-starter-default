import React from "react";
import ExperienceEntry from "./ExperienceEntry";

export default function Experience({ item }) {
  return (
    <button class="accordion">
      <ExperienceEntry
        logo={item.logo}
        title={item.title}
        companies={item.companies}
        from={item.from}
        to={item.to}
        location={item.location}
        descriptions={item.descriptions}
        duration={item.duration}
        width={item.width}
      />
    </button>
  );
}
