// =====================================================================
//  ALL YOUR TEXT AND PICTURE PATHS LIVE IN THIS ONE FILE.
//  Edit the words between the quotes. Leave the quotes and commas alone.
//
//  PICTURES: put image files in the  public/images/  folder, then write the
//  path like  "/images/me.jpg"  (leading slash, no "public"). Leave "" to
//  show a blank placeholder box.
// =====================================================================

export const profile = {
  name: "Anaya",
  tagline: "Mechanical Engineering Student",
  // 📸 YOUR PHOTO: e.g. "/images/me.jpg"
  photo: "",
};

// ---------- 01 ABOUT ----------
// 📝 BULK TEXT: each line in quotes is one paragraph. Add or delete lines freely.
export const about = [
  "Write your first about-me paragraph here. Who you are, where you study, what you love building.",
  "Write a second paragraph here. Your interests, goals, what drives you toward engineering and quantum.",
];

// ---------- 02 ENGINEERING EXPERIENCE ----------
// Copy a whole { ... }, block to add another job/role.
export const experience = [
  {
    role: "Your Role Title",
    place: "Company or Lab Name",
    dates: "Month Year - Month Year",
    // 📝 BULK TEXT: describe what you did
    description: "Describe your responsibilities, tools used, and what you achieved here.",
  },
  {
    role: "Another Role Title",
    place: "Another Company",
    dates: "Month Year - Month Year",
    description: "Describe this experience here.",
  },
];

// ---------- 03 ENGINEERING PROJECTS ----------
// 📸 image: e.g. "/images/bridge.jpg"      link: "" or a GitHub/demo URL
export const projects = [
  {
    title: "Project One",
    tag: "CAD / Design",
    image: "",
    // 📝 BULK TEXT
    description: "Describe the project: the problem, your approach, tools, and results.",
    link: "",
  },
  {
    title: "Project Two",
    tag: "Mechanics",
    image: "",
    description: "Describe the project here.",
    link: "",
  },
  {
    title: "Project Three",
    tag: "Prototyping",
    image: "",
    description: "Describe the project here.",
    link: "",
  },
];

// ---------- 04 QUANTUM PROJECTS ----------
export const quantum = [
  {
    title: "Quantum Project One",
    tag: "Simulation",
    image: "",
    // 📝 BULK TEXT
    description: "Describe your quantum project here.",
    link: "",
  },
  {
    title: "Quantum Project Two",
    tag: "Theory",
    image: "",
    description: "Describe your quantum project here.",
    link: "",
  },
];

// ---------- 05 CONTACT ----------
export const contact = {
  blurb: "Want to collaborate or chat about engineering? Reach out!",
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-name",
  github: "https://github.com/anaya-sat",
};
