import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import FadeInView from "./FadeInView";

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured?: boolean;
}

const ProjectCard: React.FC<Project> = ({
  title,
  image,
  description,
  technologies,
  liveUrl,
  githubUrl,
  featured,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 120; // Characters to show before truncating
  const shouldTruncate = description.length > maxLength;

  const displayDescription =
    shouldTruncate && !isExpanded
      ? description.slice(0, maxLength) + "..."
      : description;

  return (
    <div
      className={`card group overflow-hidden ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 h-60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 p-2 rounded-full hover:bg-primary-700 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background-accent p-2 rounded-full hover:bg-background-secondary transition-colors"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
        {featured && (
          <div className="absolute top-3 left-3">
            <div className="flex items-center bg-accent-600/90 px-2 py-1 rounded-md text-xs font-medium">
              <Star size={12} className="mr-1" />
              Featured Project
            </div>
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <p className="text-gray-400 mb-2">{displayDescription}</p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary-500 hover:text-primary-400 text-sm font-medium flex items-center transition-colors"
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp size={14} className="ml-1" />
              </>
            ) : (
              <>
                <span>Show More</span>
                <ChevronDown size={14} className="ml-1" />
              </>
            )}
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-background-accent rounded-md text-xs font-medium text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const projects: Project[] = [
    {
      title: "Virtual ICU Visits",
      image: "/VirtualVisit ICU.jpg",
      description:
"Developed a secure web platform using HTML, CSS, JavaScript, and PHP to enable scheduled virtual ICU visits. Integrated Google Meet API for real-time video calls between patients and their families.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "Proxy GoogleMeet API"],
      // liveUrl: "https://the-wild-oasis-website-ub.vercel.app/",
      githubUrl: "https://github.com/kiran-jaiswal/Virtual-ICU-Visits",
      category: "Full Stack",
      featured: true,
    },
    {
      title: "Portfolio Website",
      image: "/portfolio.png",
      description:
        "A modern, responsive portfolio website showcasing my work and skills. Features smooth animations, interactive elements, and a clean design that adapts perfectly to all screen sizes for optimal user experience.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Frontend",
    },
    // {
    //   title: "Wild Oasis Management System",
    //   image: "/wild-oasis-image-reception.jpg",
    //   description:
    //     "A comprehensive hotel management application built for managers and receptionists. Features include room management, booking administration, guest check-in/check-out, financial reporting with interactive charts, and real-time dashboard for hotel operations monitoring.",
    //   technologies: ["ReactJS", "React Query", "Recharts", "Supabase"],
    //   liveUrl: "https://the-wild-oasis-gamma-lovat.vercel.app",
    //   githubUrl: "https://github.com/UjjwalBaranwal/THE_WILD_OASIS.git",
    //   category: "Full Stack",
    // },
    {
      title: "Piano Play",
      image: "/PianoPlay.png",
      description:
        "Developed an interactive Piano Play web app using HTML, CSS, and JavaScript. Users can play notes using keyboard or mouse, with real-time audio feedback and visual key animations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/kiran-jaiswal/PianoPlayPro",
      category: "Frontend",
    },
    // {
    //   title: "Alarm App",
    //   image: "/Alarm App.png",
    //   description:
    //     "A beautifully designed landing page for a premium food delivery service. Features responsive design, smooth scrolling navigation, interactive elements, compelling call-to-actions, and modern UI/UX principles to maximize conversion rates.",
    //   technologies: ["HTML", "CSS", "JavaScript"],
    //   liveUrl: "https://omnifood-ub.netlify.app/",
    //   githubUrl: "https://github.com/UjjwalBaranwal/ominfood_ub.git",
    //   category: "Frontend",
    //   featured: true,
    // },
    {
      title: "Alarm App",
      image: "/Alarm App.png",
      description:
        "Built a dynamic Alarm Clock web application using HTML, CSS, and JavaScript. Enabled users to set, view, and trigger alarms with real-time updates and sound notifications.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      githubUrl: "https://github.com/kiran-jaiswal?tab=repositories",
      category: "Frontend",
    },
  ];

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section-container">
      <FadeInView>
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Browse through a selection of my projects that showcase my skills
            and expertise in various technologies.
          </p>
        </div>
      </FadeInView>

      <FadeInView delay={0.2}>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? "bg-primary-600 text-white"
                  : "bg-background-secondary text-gray-400 hover:bg-background-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <FadeInView
            key={project.title}
            delay={index * 0.1}
            className={project.featured ? "md:col-span-2" : ""}
          >
            <ProjectCard {...project} />
          </FadeInView>
        ))}
      </div>

      <FadeInView delay={0.4}>
        <div className="text-center mt-12">
          <a
            href="https://github.com/kiran-jaiswal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <Github size={18} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </FadeInView>
    </section>
  );
};

export default Projects;
