export interface SocialLink {
  name: string;
  label: string;
  url: string;
  isExternal: boolean;
  username?: string;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    label: "GitHub",
    url: "https://github.com/dashboard",
    username: "@abdur-rahman",
    isExternal: true,
    ariaLabel: "View Abdurrahman's GitHub profile",
  },
  {
    name: "LinkedIn",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/abdur-rahman-8a8047428/",
    username: "in/abdur-rahman-8a8047428",
    isExternal: true,
    ariaLabel: "Connect with Abdurrahman on LinkedIn",
  },
  {
    name: "Email",
    label: "Email",
    url: "mailto:abdurrahman978728@gmail.com",
    username: "abdurrahman978728@gmail.com",
    isExternal: false,
    ariaLabel: "Send an email to Abdurrahman",
  },
  {
    name: "Resume",
    label: "Resume (CV)",
    url: "mailto:abdurrahman978728@gmail.com?subject=Resume%20Request%20-%20Abdurrahman",
    username: "Resume.pdf",
    isExternal: false,
    ariaLabel: "Request or download Abdurrahman's resume",
  },
];

export const techNextInfo = {
  name: "TechNext / Technext96",
  shortName: "TechNext",
  url: "https://technext96.com/",
  role: "Developer",
  statement: "Working across modern web and mobile application development, contributing to product implementation and frontend engineering.",
};
