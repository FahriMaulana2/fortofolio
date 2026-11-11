import {
  siPhp,
  siLaravel,
  siLivewire,
  siMysql,
  siRedis,
  siPostman,
  siJavascript,
  siHtml5,
  siTailwindcss,
  siAlpinedotjs,
  siGit,
  siGithub,
  siFigma,
  type SimpleIcon,
} from "simple-icons";

// Official marks for logos missing in simple-icons
export const siCss3Custom: SimpleIcon = {
  title: "CSS3",
  slug: "css3",
  hex: "1572B7",
  source: "https://www.w3.org/Style/CSS/",
  path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z",
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>',
};

export const siVsCodeCustom: SimpleIcon = {
  title: "Visual Studio Code",
  slug: "visualstudiocode",
  hex: "007ACC",
  source: "https://code.visualstudio.com",
  path: "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z",
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Visual Studio Code</title><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>',
};

export const siRestApiCustom: SimpleIcon = {
  title: "REST API",
  slug: "restapi",
  hex: "E8913A",
  source: "https://restfulapi.net/",
  path: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5v-2h-3v-1h3v-2l3.5 2.5zm-2-7v2h3v1h-3v2L7.5 11z",
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>REST API</title><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5v-2h-3v-1h3v-2l3.5 2.5zm-2-7v2h3v1h-3v2L7.5 11z"/></svg>',
};

export interface OrbitTool {
  name: string;
  ring: 1 | 2;
  angle: string; // e.g. "0deg", "60deg"
  icon: SimpleIcon;
  color?: string; // override when required (e.g. #181717 for GitHub)
}

export interface ToolCategory {
  title: string;
  details: string;
}

export interface MarqueeTool {
  name: string;
  color: string;
  icon: SimpleIcon;
}

export const toolsData = {
  heading: "Tools I use to bring ideas to life.",
  lead: "A focused, production-ready stack. Hover the orbit to pause it and see each tool.",
  categories: [
    {
      title: "Backend",
      details: "PHP, Laravel 13, Livewire 4, REST APIs",
    },
    {
      title: "Frontend",
      details: "HTML5, CSS3, Tailwind CSS, JavaScript, Alpine.js",
    },
    {
      title: "Data & workflow",
      details: "MySQL, Redis, Git, Figma, Postman",
    },
  ] as ToolCategory[],
  hub: {
    title: "My stack",
    subtitle: "14 tools",
  },
  orbitAriaLabel:
    "Orbit of tools: PHP, Laravel, Livewire, MySQL, Redis, Postman, JavaScript, HTML5, CSS3, Tailwind CSS, Alpine.js, Git, GitHub, Figma",
  orbitTools: [
    // Inner ring (ring 1, r: 0.22, 34s rotation)
    {
      name: "PHP",
      ring: 1,
      angle: "0deg",
      icon: siPhp,
    },
    {
      name: "Laravel",
      ring: 1,
      angle: "60deg",
      icon: siLaravel,
    },
    {
      name: "Livewire",
      ring: 1,
      angle: "120deg",
      icon: siLivewire,
    },
    {
      name: "MySQL",
      ring: 1,
      angle: "180deg",
      icon: siMysql,
    },
    {
      name: "Redis",
      ring: 1,
      angle: "240deg",
      icon: siRedis,
    },
    {
      name: "Postman",
      ring: 1,
      angle: "300deg",
      icon: siPostman,
    },
    // Outer ring (ring 2, r: 0.40, 60s rotation)
    {
      name: "JavaScript",
      ring: 2,
      angle: "0deg",
      icon: siJavascript,
    },
    {
      name: "HTML5",
      ring: 2,
      angle: "45deg",
      icon: siHtml5,
    },
    {
      name: "CSS3",
      ring: 2,
      angle: "90deg",
      icon: siCss3Custom,
    },
    {
      name: "Tailwind CSS",
      ring: 2,
      angle: "135deg",
      icon: siTailwindcss,
    },
    {
      name: "Alpine.js",
      ring: 2,
      angle: "180deg",
      icon: siAlpinedotjs,
    },
    {
      name: "Git",
      ring: 2,
      angle: "225deg",
      icon: siGit,
    },
    {
      name: "GitHub",
      ring: 2,
      angle: "270deg",
      icon: siGithub,
      color: "#181717",
    },
    {
      name: "Figma",
      ring: 2,
      angle: "315deg",
      icon: siFigma,
    },
  ] as OrbitTool[],
  marqueeTools: [
    { name: "PHP 8", color: "#777BB4", icon: siPhp },
    { name: "Laravel 13", color: "#FF2D20", icon: siLaravel },
    { name: "Livewire 4", color: "#4E56A6", icon: siLivewire },
    { name: "MySQL", color: "#4479A1", icon: siMysql },
    { name: "JavaScript", color: "#F7DF1E", icon: siJavascript },
    { name: "Alpine.js", color: "#8BC0D0", icon: siAlpinedotjs },
    { name: "Tailwind CSS", color: "#06B6D4", icon: siTailwindcss },
    { name: "HTML5", color: "#E34F26", icon: siHtml5 },
    { name: "CSS3", color: "#1572B7", icon: siCss3Custom },
    { name: "Redis", color: "#FF4438", icon: siRedis },
    { name: "REST API", color: "#e8913a", icon: siRestApiCustom },
    { name: "Git", color: "#F03C2E", icon: siGit },
    { name: "GitHub", color: "#181717", icon: siGithub },
    { name: "Figma", color: "#F24E1E", icon: siFigma },
    { name: "VS Code", color: "#007ACC", icon: siVsCodeCustom },
    { name: "Postman", color: "#FF6C37", icon: siPostman },
  ] as MarqueeTool[],
};
