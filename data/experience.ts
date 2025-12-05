export interface Experience {
  company: string;
  position: string;
  duration: string;
  location?: string;
  logo: string;
  website?: string;
  contract?: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Internship';
  description: string[];
  technologies?: string[];
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Ministry of Innovation and Technology.",
    position: "Lead Full Stack Developer",
    duration: "2023 - Present",
    location: "Addis Ababa , Ethiopia",
    logo: "/logos/tech-innovations.png",
    
    contract: "Full-time",
    description: [
      "Lead development of scalable web applications serving 100K+ monthly users",
      "Architected and implemented microservices architecture reducing latency by 40%",
      "Mentored 4 junior developers and established code review processes",
      "Collaborated with product team to translate business requirements into technical solutions"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "AWS", "Docker", "Kubernetes"],
    achievements: [
      "Improved application performance by 60% through code optimization",
      "Reduced infrastructure costs by 30% with AWS optimization",
      "Implemented CI/CD pipeline reducing deployment time by 70%"
    ]
  },
  {
    company: "Creative Media Studio",
    position: "Video Editor & Data Analyst",
    duration: "2021 - 2023",
    location: "Remote",
    logo: "/logos/creative-media.png",
    
    contract: "Contract",
    description: [
      "Produced and edited 150+ video projects for corporate clients and creators",
      "Analyzed viewer engagement data to optimize content strategy",
      "Developed automated workflows for video processing using Python",
      "Created data visualizations for performance reporting"
    ],
    technologies: ["Adobe Premiere", "After Effects", "Python", "Power BI", "Excel"],
    achievements: [
      "Increased viewer retention by 35% through data-driven editing",
      "Reduced video production time by 50% with automated workflows",
      "Created award-winning documentary series with 1M+ views"
    ]
  },
  {
    company: "Mobile First Solutions",
    position: "Flutter Developer",
    duration: "2020 - 2021",
    location: "Haramaya, Ethiopia",
    logo: "/logos/mobile-first.png",
    contract: "Full-time",
    description: [
      "Developed 5+ cross-platform mobile applications with Flutter",
      "Implemented state management using Provider and Riverpod",
      "Integrated Firebase for authentication and real-time databases",
      "Collaborated with UI/UX designers to create pixel-perfect interfaces"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Provider", "REST APIs"],
    achievements: [
      "Apps featured in Google Play Store with 50K+ downloads",
      "Achieved 99% crash-free rate in production",
      "Reduced app size by 40% through optimization"
    ]
  },
  {
    company: "Data Insights Corp",
    position: "Data Analyst & SharePoint Specialist",
    duration: "2019 - 2020",
    location: "Remote",
    logo: "/logos/data-insights.png",
    description: [
      "Managed SharePoint portals for enterprise clients",
      "Created Power BI dashboards for business intelligence",
      "Automated data collection and reporting processes",
      "Trained team members on Microsoft 365 tools"
    ],
    technologies: ["SharePoint", "Power BI", "Excel", "Power Automate", "SQL"],
    achievements: [
      "Automated monthly reporting saving 20 hours per week",
      "Improved data accuracy by 95% through validation systems",
      "Successfully migrated 1000+ users to new SharePoint platform"
    ]
  }
];