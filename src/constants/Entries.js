import synamedia from "../images/synamedia.gif"
import volen from "../images/volen.png"
import acl from "../images/alten_calsoft_labs.png"
import ubc from "../images/ubc.png"

export const educationEntries = [
  {
    instituteLogo: ubc,
    degree: "Bachelor of Science",
    major: "Cognitive Systems",
    specialization: "Computational Intelligence and Design",
    instituteName: "University of British Columbia",
    graduationYear: "2016",
    location: "Vancouver, British Columbia, Canada",
    description: "Earned a B.Sc. in Cognitive Systems, blending disciplines like Computer Science and Psychology, emphasizing an interdisciplinary approach. Achieved the President's Entrance Scholarship and served as Industry Relations Officer, Cognitive Systems Society.",
    width: 100
  }
];

export const experienceEntries = [
  {
    companyLogo: synamedia,
    jobTitle: "Senior Software Engineer",
    company: "Synamedia",
    startDate: new Date("2024-01-01"),
    endDate: null,
    location: "Bengaluru, Karnataka, India",
    description: "Leading the development of a cross-platform addressable advertising solution.",
    width: 150
  },
  {
    companyLogo: synamedia,
    jobTitle: "Software Engineer",
    company: "Synamedia",
    startDate: new Date("2020-02-05"),
    endDate: new Date("2023-12-31"),
    location: "Bengaluru, Karnataka, India",
    description: "Contributed to pioneering SaaS anti-piracy solutions, focusing on data engineering and backend development. Led the creation of a management portal using the MERN stack, streamlining product operations.",
    width: 150
  },
  {
    companyLogo: volen,
    jobTitle: "Software Engineer",
    company: "Volen Software Services Pvt. Ltd",
    startDate: new Date("2019-09-03"),
    endDate: new Date("2020-02-04"),
    location: "Bengaluru, Karnataka, India",
    description: "Integral in developing Synamedia's anti-piracy solution, focusing on Python frameworks. Recognized for high-quality software solutions, leading to a full-time position at Synamedia.",
    width: 150
  },
  {
    companyLogo: acl,
    jobTitle: "Software Engineer",
    company: "ACL Digital",
    startDate: new Date("2017-05-01"),
    endDate: new Date("2019-07-31"),
    location: "Bengaluru, Karnataka, India",
    description: "Focused on SDN/NFV solutions, managing device orchestration and developing resource adaptors.",
    width: 150
  },
  {
    companyLogo: ubc,
    jobTitle: "Teaching Assistant",
    company: "The University of British Columbia",
    startDate: new Date("2013-01-02"),
    endDate: new Date("2013-04-24"),
    location: "Vancouver, British Columbia, Canada",
    description: "Facilitated a core Cognitive Systems course, bridging communication between students and faculty. Played a key role in curriculum development and student mentorship, contributing to academic success.",
    width: 100
  }
];
