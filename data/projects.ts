



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
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory',
    longDescription: 'A modern e-commerce platform built with Next.js 14, featuring real-time inventory management, payment integration, and admin dashboard.',
    image: '/projects/ecommerce.jpg',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://demo-store.vercel.app',
    category: 'Full Stack',
    features: [
      'Real-time inventory updates',
      'Secure payment processing',
      'Admin dashboard',
      'Responsive design',
      'SEO optimized'
    ],
    githubStats: {
      stars: 128,
      forks: 34,
      watchers: 12
    },
    deployment: 'vercel',
    status: 'active'
  },
  {
    id: '2',
    title: 'AI Code Assistant',
    description: 'Intelligent code completion and debugging tool',
    longDescription: 'An AI-powered code assistant that helps developers write better code with intelligent suggestions and automated debugging.',
    image: '/projects/ai-assistant.jpg',
    tech: ['React', 'Python', 'FastAPI', 'OpenAI API', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/yourusername/ai-code-assistant',
    liveUrl: 'https://ai-code-assistant.vercel.app',
    category: 'AI/ML',
    features: [
      'Real-time code suggestions',
      'Automated bug detection',
      'Multi-language support',
      'VS Code extension',
      'Custom training models'
    ],
    githubStats: {
      stars: 256,
      forks: 89,
      watchers: 45
    },
    deployment: 'vercel',
    status: 'active'
  },
  {
    id: '3',
    title: 'Health Tracker App',
    description: 'Mobile app for fitness and health monitoring',
    longDescription: 'A comprehensive health tracking application that monitors fitness metrics, nutrition, and sleep patterns with data visualization.',
    image: '/projects/health-tracker.jpg',
    tech: ['React Native', 'Firebase', 'Chart.js', 'HealthKit', 'Redux'],
    githubUrl: 'https://github.com/yourusername/health-tracker',
   
    category: 'Mobile',
    features: [
      'Real-time health metrics',
      'Data visualization',
      'Workout plans',
      'Nutrition tracking',
      'Sleep analysis'
    ],
    githubStats: {
      stars: 89,
      forks: 23,
      watchers: 18
    },
    status: 'active'
  },
  {
    id: '4',
    title: 'Dev Collaboration Tool',
    description: 'Real-time collaboration platform for developers',
    longDescription: 'A platform for developers to collaborate on code in real-time with video chat, code editing, and project management features.',
    image: '/projects/collab-tool.jpg',
    tech: ['Next.js', 'Socket.io', 'WebRTC', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/dev-collab',
    liveUrl: 'https://dev-collab.vercel.app',
    category: 'Real-time',
    features: [
      'Real-time code collaboration',
      'Video/audio chat',
      'Project management',
      'Git integration',
      'Team workspaces'
    ],
    githubStats: {
      stars: 167,
      forks: 42,
      watchers: 31
    },
    deployment: 'vercel',
    status: 'active'
  }
];