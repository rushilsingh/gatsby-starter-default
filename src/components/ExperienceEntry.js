import React from "react"
import EntryCard from "./EntryCard"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EventIcon from "@mui/icons-material/Event"

const formatDate = date => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()
  return `${month} ${year}`
}

const ExperienceEntry = ({ entry }) => {
  const {
    companyLogo,
    jobTitle,
    company,
    startDate,
    endDate,
    location,
    description,
    width,
  } = entry

  return (
    <EntryCard
      logo={companyLogo}
      heading={`${jobTitle}`}
      subHeading={company}
      details={[
        <span>
          <EventIcon
            fontSize="small"
            style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
          />{" "}
          {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"}
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

export default ExperienceEntry
