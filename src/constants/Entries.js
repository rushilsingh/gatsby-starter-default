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
    description: "I obtained a degree in Cognitive Systems, a multidisciplinary program that combines Computer Science, Philosophy, Psychology, Neuroscience, and Linguistics. My focus was on the Computational Intelligence and Design stream, which emphasized Computer Science while intersecting with related fields.",
    width: 100
  }
];

export const experienceEntries = [
  {
    companyLogo: synamedia,
    jobTitle: "Software Engineer",
    company: "Synamedia",
    startDate: new Date("2020-02-05"),
    endDate: null,
    location: "Bengaluru, Karnataka, India",
    description: "At Synamedia, I've developed anti-piracy and addressable advertising solutions using Python, AWS, JavaScript, and Flutter.",
    width: 150
  },
  {
    companyLogo: volen,
    jobTitle: "Software Engineer",
    company: "Volen Software Services",
    startDate: new Date("2019-09-03"),
    endDate: new Date("2020-02-04"),
    location: "Bengaluru, Karnataka, India",
    description: "At Volen Software Services, I contributed to Synamedia's anti-piracy solution using Python-based frameworks, delivering client-oriented software.",
    width: 150
  },
  {
    companyLogo: acl,
    jobTitle: "Software Engineer",
    company: "Alten Calsoft Labs (now ACL Digital)",
    startDate: new Date("2017-05-01"),
    endDate: new Date("2019-06-30"),
    location: "Bengaluru, Karnataka, India",
    description: "At Alten Calsoft Labs, I gained expertise in crafting SDN and NFV solutions, leveraging my skills in software development and networking to deliver tailored, client-centric results.",
    width: 150
  },
  {
    companyLogo: ubc,
    jobTitle: "Teaching Assistant",
    company: "The University of British Columbia",
    startDate: new Date("2013-01-02"),
    endDate: new Date("2013-04-24"),
    location: "Vancouver, British Columbia, Canada",
    description: "As a Teaching Assistant for UBC's COGS 300 course, I gained experience in course administration, curriculum development, and student mentorship. I facilitated communication, crafted lab tasks, and assessed reports and exams, contributing to course success and fostering a positive learning environment.",
    width: 100
  }
];
