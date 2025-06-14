import React from "react";
import { Code2, MessageCircle, Briefcase, User } from "lucide-react";
import FadeInView from "./FadeInView";
import AnimatedText from "./AnimatedText";

const AboutCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="text-primary-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const cards = [
    {
      icon: <Code2 size={28} />,
      title: "Full-Stack Development",
      description:
        "Building scalable and responsive web applications using the MERN stack and modern frameworks.",
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Chatbot & Backend Systems",
      description:
        "Developing intelligent chatbots with RASA and building robust backend systems using Node.js and Express.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Event & Project Management",
      description:
        "Managing technical events and collaborative student projects, ensuring smooth execution and engagement.",
    },
    {
      icon: <User size={28} />,
      title: "Open Source & Community",
      description:
        "Contributing to open-source projects and fostering developer communities through collaboration and mentorship.",
    },
  ];

  return (
    <section id="about" className="bg-background-secondary">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeInView direction="right">
            <h2 className="section-title mb-6">About Me</h2>

            <AnimatedText
              text="I'm a curious developer who enjoys building impactful web applications, crafting clean UIs, and solving real-world problems through code."
              className="text-xl text-gray-300 mb-6"
              once
            />

            <p className="text-gray-400 mb-6">
              I'm a final year Computer Science student at Lovely Professional University,
              passionate about building meaningful digital experiences. I
              specialize in full-stack web development using the MERN stack, and
              love creating responsive, scalable applications that solve
              real-world problems.
            </p>
            <p className="text-gray-400 mb-8">
              Beyond development, I'm actively involved in open-source
              contributions, event management, and leading student-driven tech
              initiatives. I'm a strong believer in clean architecture,
              user-centric design, and using technology as a tool for impact and
              innovation.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn-outline">
                View My Work
              </a>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <FadeInView key={index} delay={index * 0.1} once>
                <AboutCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
