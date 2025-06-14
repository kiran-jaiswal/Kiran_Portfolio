import React from "react";
import { motion } from "framer-motion";
import FadeInView from "./FadeInView";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiRasa,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiReactquery,
  SiApachekafka,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiSwagger,
  SiJsonwebtokens,
  SiFusionauth,
  SiEslint,
  SiPrettier,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiRedux } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
// import { SiZustand } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { FaUserShield } from "react-icons/fa";
interface Skill {
  name: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    {
      name: "React",
      category: "Frontend",
      icon: <SiReact size={24} className="text-cyan-400" />,
      color: "text-cyan-400",
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: <SiNextdotjs size={24} className="text-white" />,
      color: "text-white",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: <SiJavascript size={24} className="text-yellow-400" />,
      color: "text-yellow-400",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      icon: <SiTypescript size={24} className="text-blue-500" />,
      color: "text-blue-500",
    },
    {
      name: "HTML5",
      category: "Frontend",
      icon: <SiHtml5 size={24} className="text-orange-500" />,
      color: "text-orange-500",
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: <SiCss3 size={24} className="text-blue-400" />,
      color: "text-blue-400",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: <SiTailwindcss size={24} className="text-sky-400" />,
      color: "text-sky-400",
    },
    {
      name: "Redux Toolkit",
      category: "Frontend",
      icon: <SiRedux size={24} className="text-purple-500" />,
      color: "text-purple-500",
    },
    {
      name: "Framer Motion",
      category: "Frontend",
      icon: <SiFramer size={24} className="text-pink-400" />,
      color: "text-pink-400",
    },
    {
      name: "React Query",
      category: "Frontend",
      icon: <SiReactquery size={24} className="text-rose-400" />,
      color: "text-rose-400",
    },
    {
      name: "ShadCN/UI",
      category: "Frontend",
      icon: <SiShadcnui size={24} className="text-zinc-300" />,
      color: "text-zinc-300",
    },
    // {
    //   name: "Zustand",
    //   category: "Frontend",
    //   icon: <SiZustand size={24} className="text-yellow-600" />,
    //   color: "text-yellow-600",
    // },
    {
      name: "React Hook Form",
      category: "Frontend",
      icon: <SiReacthookform size={24} className="text-rose-500" />,
      color: "text-rose-500",
    },
    // Backend

    {
      name: "Node.js",
      category: "Backend",
      icon: <SiNodedotjs size={24} className="text-green-500" />,
      color: "text-green-500",
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: <SiExpress size={24} className="text-gray-300" />,
      color: "text-gray-300",
    },
    {
      name: "MongoDB",
      category: "Backend",
      icon: <SiMongodb size={24} className="text-green-600" />,
      color: "text-green-600",
    },
    {
      name: "GraphQL",
      category: "Backend",
      icon: <SiGraphql size={24} className="text-pink-500" />,
      color: "text-pink-500",
    },
    {
      name: "RASA",
      category: "Backend",
      icon: <SiRasa size={24} className="text-indigo-400" />,
      color: "text-indigo-400",
    },
    {
      name: "PostgreSQL",
      category: "Backend",
      icon: <SiPostgresql size={24} className="text-blue-700" />,
      color: "text-blue-700",
    },
    {
      name: "Supabase",
      category: "Backend",
      icon: <SiSupabase size={24} className="text-green-700" />,
      color: "text-green-700",
    },
    {
      name: "Firebase",
      category: "Backend",
      icon: <SiFirebase size={24} className="text-yellow-400" />,
      color: "text-yellow-400",
    },

    {
      name: "API Development",
      category: "Backend",
      icon: <SiSwagger size={24} className="text-cyan-400" />,
      color: "text-cyan-400",
    },
    {
      name: "Role-based Auth",
      category: "Backend",
      icon: <FaUserShield size={24} className="text-purple-500" />,
      color: "text-purple-500",
    },
    {
      name: "JWT Auth",
      category: "Backend",
      icon: <SiJsonwebtokens size={24} className="text-yellow-500" />,
      color: "text-yellow-500",
    },
    {
      name: "OAuth 2.0",
      category: "Backend",
      icon: <SiFusionauth size={24} className="text-blue-400" />,
      color: "text-blue-400",
    },

    // Tools & Platforms
    {
      name: "Git",
      category: "Tools",
      icon: <SiGit size={24} className="text-orange-500" />,
      color: "text-orange-500",
    },
    {
      name: "GitHub",
      category: "Tools",
      icon: <SiGithub size={24} className="text-white" />,
      color: "text-white",
    },
    {
      name: "Docker",
      category: "Tools",
      icon: <SiDocker size={24} className="text-blue-400" />,
      color: "text-blue-400",
    },
    {
      name: "Kafka",
      category: "Tools",
      icon: <SiApachekafka size={24} className="text-red-600" />,
      color: "text-red-600",
    },
    {
      name: "Postman",
      category: "Tools",
      icon: <SiPostman size={24} className="text-orange-400" />,
      color: "text-orange-400",
    },
    {
      name: "VS Code",
      category: "Tools",
      icon: <VscVscode size={24} className="text-blue-500" />,
      color: "text-blue-500",
    },

    {
      name: "ESLint",
      category: "Tools",
      icon: <SiEslint size={24} className="text-purple-600" />,
      color: "text-purple-600",
    },
    {
      name: "Prettier",
      category: "Tools",
      icon: <SiPrettier size={24} className="text-pink-500" />,
      color: "text-pink-500",
    },

    {
      name: "Netlify",
      category: "Tools",
      icon: <SiNetlify size={24} className="text-teal-400" />,
      color: "text-teal-400",
    },
    {
      name: "Vercel",
      category: "Tools",
      icon: <SiVercel size={24} className="text-gray-300" />,
      color: "text-gray-300",
    },
  ];

  const categories = [...new Set(skills.map((skill) => skill.category))];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(86, 104, 255, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="skills" className="section-container">
      <FadeInView>
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">My Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            I've acquired a wide range of skills throughout my career. Here's a
            look at my technical expertise and capabilities.
          </p>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {categories.map((category, categoryIndex) => (
          <FadeInView key={category} delay={categoryIndex * 0.2}>
            <motion.div
              className="card h-full"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary-400">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      className={`p-4 rounded-lg bg-background-accent/30 backdrop-blur-sm 
                               border border-primary-600/20 hover:border-primary-600/50
                               flex items-center gap-3 cursor-pointer ${skill.color}`}
                      variants={cardVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </FadeInView>
        ))}
      </div>

      <FadeInView delay={0.4}>
        <motion.div
          className="mt-16 card bg-background-accent/30 border-dashed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Additional Skills</h3>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "API Development",
              "Object-Oriented Programming (OOP)",
              "Agile Methodology",
              "Test-Driven Development (TDD)",
              "Continuous Integration / Continuous Deployment (CI/CD)",
              "Performance Optimization",
              "Responsive Design",
              "SEO Best Practices",
              "Role-based Authentication",
              "JWT & OAuth 2.0",
              "Microservices Architecture",
              "Version Control (Git)",
              "Code Reviews & Pair Programming",
              "Cross-Browser Compatibility",
              "Accessibility (a11y)",
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="px-3 py-1.5 bg-background-secondary rounded-full text-sm font-medium 
                         text-gray-300 border border-primary-600/30 hover:border-primary-600/50
                         hover:bg-primary-600/10 transition-colors cursor-default"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </FadeInView>
    </section>
  );
};

export default Skills;
