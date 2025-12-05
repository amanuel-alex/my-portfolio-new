"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Html, Float, Sparkles, Stars } from '@react-three/drei';
import { useState, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaDatabase,
  FaGithub, FaJs, FaCss3Alt, FaGitAlt, FaServer, FaMobile,
  FaCode, FaToolbox, FaLanguage, FaVideo, FaChartLine,
  FaTable, FaShareSquare, FaFileExcel, FaFilm, FaEdit,
  FaChartBar, FaLaptopCode, FaCloud
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb,
  SiPostgresql, SiRedis, SiGraphql, SiKubernetes,
  SiNestjs, SiExpress, SiDjango, SiFastapi, SiFlutter,
  SiFirebase, SiPrisma, 
  SiAdobeaftereffects, SiAdobepremierepro, SiAdobephotoshop,
  SiFigma, SiCanva
} from 'react-icons/si';
import { MdAnalytics, MdDataArray } from 'react-icons/md';

// Enhanced categories covering all your skills
const categories = [
  { 
    id: 'fullstack', 
    name: 'Full Stack', 
    color: '#61DAFB',
    icon: <FaCode />,
    tech: [
      { name: 'React', icon: <FaReact />, level: 'Expert' },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 'Expert' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 'Advanced' },
      { name: 'Node.js', icon: <FaNodeJs />, level: 'Expert' },
      { name: 'Express', icon: <SiExpress />, level: 'Expert' },
      { name: 'MongoDB', icon: <SiMongodb />, level: 'Advanced' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Intermediate' },
      { name: 'Tailwind', icon: <SiTailwindcss />, level: 'Expert' },
    ]
  },
  { 
    id: 'mobile', 
    name: 'Mobile Dev', 
    color: '#02569B',
    icon: <FaMobile />,
    tech: [
      { name: 'Flutter', icon: <SiFlutter />, level: 'Expert' },
      { name: 'Dart', icon: <span className="text-xl">Dart</span>, level: 'Expert' },
      { name: 'Firebase', icon: <SiFirebase />, level: 'Advanced' },
      { name: 'React Native', icon: <FaReact />, level: 'Intermediate' },
      { name: 'Android', icon: <FaMobile />, level: 'Intermediate' },
      { name: 'iOS', icon: <FaMobile />, level: 'Intermediate' },
    ]
  },
  { 
    id: 'video', 
    name: 'Video Editing', 
    color: '#D291FF',
    icon: <FaVideo />,
    tech: [
      { name: 'Adobe Premiere', icon: <SiAdobepremierepro />, level: 'Expert' },
      { name: 'After Effects', icon: <SiAdobeaftereffects />, level: 'Advanced' },
      { name: 'Photoshop', icon: <SiAdobephotoshop />, level: 'Advanced' },
      { name: 'DaVinci Resolve', icon: <FaVideo />, level: 'Intermediate' },
      { name: 'Final Cut Pro', icon: <FaFilm />, level: 'Intermediate' },
      { name: 'Motion Graphics', icon: <FaEdit />, level: 'Advanced' },
    ]
  },
  { 
    id: 'data', 
    name: 'Data Analytics', 
    color: '#47A248',
    icon: <MdAnalytics />,
    tech: [
      { name: 'Power BI',  level: 'Expert' },
      { name: 'Excel', icon: <FaFileExcel />, level: 'Expert' },
      { name: 'Data Analysis', icon: <FaChartLine />, level: 'Advanced' },
      { name: 'Data Visualization', icon: <FaChartBar />, level: 'Advanced' },
      { name: 'SQL', icon: <FaDatabase />, level: 'Intermediate' },
      { name: 'Python', icon: <FaPython />, level: 'Intermediate' },
    ]
  },
  { 
    id: 'microsoft', 
    name: 'Microsoft Stack', 
    color: '#00A4EF',
    icon: <FaShareSquare />,
    tech: [
      { name: 'SharePoint',  level: 'Advanced' },
      { name: 'Power Apps', icon: <FaShareSquare />, level: 'Intermediate' },
      { name: 'Power Automate', icon: <FaShareSquare />, level: 'Intermediate' },
      { name: 'Office 365', icon: <FaShareSquare />, level: 'Expert' },
      { name: 'Data Entry', icon: <FaTable />, level: 'Expert' },
      { name: 'MS Teams', icon: <FaShareSquare />, level: 'Advanced' },
    ]
  },
  { 
    id: 'tools', 
    name: 'DevOps & Tools', 
    color: '#2496ED',
    icon: <FaToolbox />,
    tech: [
      { name: 'Docker', icon: <FaDocker />, level: 'Advanced' },
      { name: 'AWS', icon: <FaAws />, level: 'Intermediate' },
      { name: 'Git', icon: <FaGitAlt />, level: 'Expert' },
      { name: 'GitHub', icon: <FaGithub />, level: 'Expert' },
      { name: 'Vercel', icon: <FaLaptopCode />, level: 'Expert' },
      { name: 'Figma', icon: <SiFigma />, level: 'Advanced' },
    ]
  },
];

// Tech Cube Component (more visual than spheres)
function TechCube({ tech, position, color, isActive, onClick }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && isActive) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={isActive ? 2 : 1} rotationIntensity={1} floatIntensity={1}>
      <mesh 
        ref={meshRef}
        position={position}
        onClick={onClick}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial 
          color={isActive ? color : color + '80'}
          emissive={isActive ? color : '#000'}
          emissiveIntensity={isActive ? 0.6 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
        
        <Html distanceFactor={15} position={[0, 1.5, 0]}>
          <div className={`text-center transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
            <div className="text-2xl mb-1" style={{ color }}>
              {tech.icon}
            </div>
            <div 
              className="text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap"
              style={{ 
                backgroundColor: color + '20', 
                color,
                border: `1px solid ${color}40`
              }}
            >
              {tech.name}
            </div>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

// Category Hexagon Component
function CategoryHexagon({ category, position, isActive, onClick }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * (isActive ? 0.5 : 0.1);
    }
  });

  return (
    <mesh 
      ref={meshRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'auto'}
    >
      <cylinderGeometry args={[1.5, 1.5, 0.5, 6]} />
      <meshStandardMaterial 
        color={isActive ? category.color : category.color + '60'}
        emissive={isActive ? category.color : '#000'}
        emissiveIntensity={isActive ? 0.8 : 0.3}
        metalness={0.9}
        roughness={0.1}
      />
      
      <Html distanceFactor={20} position={[0, 0, 0.6]}>
        <div className={`text-center ${isActive ? 'scale-125' : 'scale-100'} transition-transform`}>
          <div className="text-3xl mb-2" style={{ color: category.color }}>
            {category.icon}
          </div>
          <div 
            className="text-sm font-bold px-3 py-1 rounded-full"
            style={{ 
              backgroundColor: category.color + '20',
              color: category.color
            }}
          >
            {category.name}
          </div>
        </div>
      </Html>
    </mesh>
  );
}

export default function DiverseTechStack() {
  const [activeCategory, setActiveCategory] = useState('fullstack');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const activeCategoryData = categories.find(cat => cat.id === activeCategory);
  const activeTech = activeCategoryData?.tech || [];

  // Calculate positions for tech cubes in a circular pattern
  const getTechPositions = (count: number, radius: number = 4.5) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      positions.push([x, 0, z]);
    }
    return positions;
  };

  // Calculate positions for category hexagons in a larger circle
  const getCategoryPositions = (count: number, radius: number = 9) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(angle * 2) * 0.5; // Add some vertical variation
      positions.push([x, y, z]);
    }
    return positions;
  };

  const techPositions = getTechPositions(activeTech.length);
  const categoryPositions = getCategoryPositions(categories.length);

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10 px-4"
      >
        <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4">
          <span className="w-12 h-px bg-primary" />
          02. Diverse Expertise
          <span className="w-12 h-px bg-primary" />
        </div>
        
        <h2 className="font-mono text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Multi-Domain <span className="text-primary">Skillset</span>
        </h2>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Full Stack Developer • Flutter Expert • Video Editor • Data Analyst • Microsoft Specialist
        </p>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Canvas Container */}
        <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-card/50 to-background/30 backdrop-blur-sm shadow-2xl">
          <Canvas camera={{ position: [0, 10, 20], fov: 50 }}>
            <color attach="background" args={['#0a0a0a']} />
            
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight 
              position={[0, 8, 5]} 
              intensity={1.2} 
              color={activeCategoryData?.color} 
            />
            
            {/* Stars Background */}
            <Stars radius={100} depth={50} count={5000} factor={4} />
            
            {/* Category Hexagons */}
            {categories.map((category, i) => (
              <CategoryHexagon
                key={category.id}
                category={category}
                position={categoryPositions[i] as [number, number, number]}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            ))}
            
            {/* Tech Cubes */}
            {activeTech.map((tech, i) => (
              <TechCube
                key={tech.name}
                tech={tech}
                position={techPositions[i] as [number, number, number]}
                color={activeCategoryData?.color}
                isActive={hoveredTech === tech.name}
                onClick={() => setHoveredTech(tech.name === hoveredTech ? null : tech.name)}
              />
            ))}
            
            {/* Center Platform */}
            <mesh position={[0, -2, 0]}>
              <cylinderGeometry args={[6, 6, 0.5, 32]} />
              <meshStandardMaterial 
                color="#1a1a1a"
                metalness={0.8}
                roughness={0.4}
              />
            </mesh>
            
            {/* Animated Rings */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[4, 4.5, 64]} />
              <meshBasicMaterial 
                color={activeCategoryData?.color}
                transparent
                opacity={0.3}
                side={THREE.DoubleSide}
              />
            </mesh>
          </Canvas>
        </div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'scale-105 shadow-xl'
                  : 'hover:scale-102'
              }`}
              style={{
                backgroundColor: activeCategory === category.id 
                  ? category.color + '15' 
                  : 'transparent',
                border: `2px solid ${category.color}${activeCategory === category.id ? 'FF' : '40'}`,
              }}
            >
              <div className="relative z-10">
                <div className="flex flex-col items-center gap-2">
                  <div 
                    className="text-2xl transition-transform group-hover:scale-110"
                    style={{ color: category.color }}
                  >
                    {category.icon}
                  </div>
                  <div className="text-center">
                    <div 
                      className="font-semibold text-sm"
                      style={{ 
                        color: activeCategory === category.id 
                          ? category.color 
                          : 'var(--color-foreground)' 
                      }}
                    >
                      {category.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {category.tech.length} skills
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                style={{ backgroundColor: category.color }}
              />
            </button>
          ))}
        </motion.div>

        {/* Active Category Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-gradient-to-br from-card/50 to-background/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div 
                className="p-3 rounded-xl shadow-lg"
                style={{ 
                  backgroundColor: activeCategoryData?.color + '20',
                  color: activeCategoryData?.color
                }}
              >
                <div className="text-3xl">
                  {activeCategoryData?.icon}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{activeCategoryData?.name}</h3>
                <p className="text-muted-foreground mt-1">
                  {activeCategory === 'fullstack' && 'Modern web development with cutting-edge technologies'}
                  {activeCategory === 'mobile' && 'Cross-platform mobile applications and native development'}
                  {activeCategory === 'video' && 'Professional video editing, motion graphics, and post-production'}
                  {activeCategory === 'data' && 'Data analysis, visualization, and business intelligence'}
                  {activeCategory === 'microsoft' && 'Microsoft ecosystem, automation, and productivity tools'}
                  {activeCategory === 'tools' && 'Development operations, cloud infrastructure, and design tools'}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5">
              <span className="text-sm font-medium text-muted-foreground">Expertise Level:</span>
              <span 
                className="text-sm font-bold"
                style={{ color: activeCategoryData?.color }}
              >
                {activeCategoryData?.tech.filter(t => t.level === 'Expert').length} Expert
              </span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {activeTech.map((tech) => (
              <div
                key={tech.name}
                className={`p-4 rounded-lg transition-all duration-300 ${
                  hoveredTech === tech.name
                    ? 'scale-105 shadow-lg'
                    : ''
                }`}
                style={{
                  backgroundColor: activeCategoryData?.color + '10',
                  border: `1px solid ${activeCategoryData?.color}${hoveredTech === tech.name ? 'FF' : '30'}`,
                }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className="flex flex-col items-center gap-3">
                  <div 
                    className="text-3xl transition-transform hover:scale-110"
                    style={{ color: activeCategoryData?.color }}
                  >
                    {tech.icon}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground text-sm">{tech.name}</div>
                    <div 
                      className="text-xs mt-1 px-2 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: activeCategoryData?.color + '30',
                        color: activeCategoryData?.color,
                      }}
                    >
                      {tech.level}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Domain Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: category.color + '15',
                  border: `1px solid ${category.color}30`,
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: category.color }}
                />
                <span 
                  className="text-xs font-medium"
                  style={{ color: category.color }}
                >
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {categories.map((category, i) => (
          <motion.div
            key={category.id}
            animate={{
              y: [0, Math.random() * 30, 0],
              x: [0, Math.random() * 20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{ 
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              backgroundColor: category.color + '30'
            }}
          />
        ))}
      </div>
    </div>
  );
}