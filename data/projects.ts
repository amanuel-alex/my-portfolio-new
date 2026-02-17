



export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  icon?: React.ReactNode;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  features?: string[];
  githubStats?: {
    stars: number;
    forks: number;
    watchers: number;
  };
  deployment?: 'vercel' | 'netlify' | 'heroku' | 'aws';
  status?: 'active' | 'archived' | 'wip';
}




export const projects: Project[] = [
  {
    id: '1',
    title: 'E-tickets Platform',
    description: 'A full-stack event ticketing platform with a React web app and Node.js/Express REST APIs.',
    longDescription: 'Built a full-stack event ticketing platform with a React (Vite) web app, Node.js/Express REST APIs, and PostgreSQL persistence, supporting event discovery, bookings, and digital ticket issuance.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'Redis', 'Flutter'],
    githubUrl: 'https://github.com/amanuel-alex',
    liveUrl: 'https://et-ticket-platform.vercel.app',
    category: 'Full Stack',
    deployment: 'vercel',
  },
  {
    id: '2',
    title: 'Issue Tracker',
    description: 'A full-stack issue tracking web app built with Next.js and TypeScript.',
    longDescription: 'Built a full-stack issue tracking web app using Next.js (App Router) and TypeScript, with a modern UI and responsive layouts for managing tickets and workflows.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/amanuel-alex/issue_tracker_fullstact_web',
    category: 'Full Stack',
  },
  {
    id: '3',
    title: 'Project Management System',
    description: 'A collaborative project management system for planning and tracking work across teams.',
    longDescription: 'A project management system for planning and tracking work across teams, enabling users to create projects, define tasks, assign owners, set priorities/deadlines, and monitor progress in a centralized workspace.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop',
    tech: ['Laravel', 'PHP', 'MySQL'],
    githubUrl: 'https://github.com/amanuel-alex/laravel_quize_app',
    category: 'Full Stack',
  },
  {
    id: '4',
    title: 'Motorbike Parcel Delivery App',
    description: 'A Flutter-based mobile app for motorbike parcel delivery services.',
    longDescription: 'A mobile application built with Flutter for a motorbike parcel delivery service. It allows users to request pickups, track deliveries in real-time, and manage their shipments.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    tech: ['Flutter', 'Dart', 'Firebase'],
    githubUrl: 'https://github.com/amanuel-alex/Motorbike-Parcel-Delivery-App',
    category: 'Mobile',
  }
];