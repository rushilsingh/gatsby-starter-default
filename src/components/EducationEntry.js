import React from 'react';
import EntryCard from './EntryCard';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventIcon from '@material-ui/icons/Event';

const EducationEntry = ({ entry }) => {
	const { instituteLogo, degree, major, specialization, instituteName, graduationYear, location, description, width } = entry;

	return (
		<EntryCard
			logo={instituteLogo}
			heading={`${degree} in ${major} (${specialization})`}
			subHeading={instituteName}
			details={[
				<span><EventIcon fontSize="small" style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />Graduated: {graduationYear}</span>,
				<span><LocationOnIcon fontSize="small" style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />{location}</span>,
				description
			]}
			width={width}
		/>
	);
};

export default EducationEntry;
