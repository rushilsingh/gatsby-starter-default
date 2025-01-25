import React from "react"
import EntryCard from "./EntryCard"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EventIcon from "@mui/icons-material/Event"

const EducationEntry = ({ entry }) => {
  const {
    instituteLogo,
    degree,
    major,
    specialization,
    instituteName,
    graduationYear,
    location,
    description,
    width,
  } = entry

  return (
    <EntryCard
      logo={instituteLogo}
      heading={`${degree} in ${major} (${specialization})`}
      subHeading={instituteName}
      details={[
        <span>
          <EventIcon
            fontSize="small"
            style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
          />
          Graduated: {graduationYear}
        </span>,
        <span>
          <LocationOnIcon
            fontSize="small"
            style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
          />
          {location}
        </span>,
        description,
      ]}
      width={width}
    />
  )
}

export default EducationEntry
