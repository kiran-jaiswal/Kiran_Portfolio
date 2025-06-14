import React from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";
import FadeInView from "./FadeInView";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  link: string;
  description: string;
  skills: string[];
}

const CertificationCard: React.FC<Certification> = ({
  name,
  issuer,
  date,
  credentialId,
  link,
  description,
  skills,
}) => {
  return (
    <div className="card group">
      <div className="flex items-start gap-4">
        <div className="bg-primary-600/20 p-3 rounded-lg text-primary-500">
          <Award size={24} />
        </div>

        <div className="flex-1">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-between gap-4 group text-gray-400 hover:text-primary-500 transition-colors"
          >
            <div>
              <h3 className="text-xl font-semibold mb-1 group-hover:underline">
                {name}
              </h3>
              <p className="text-primary-400">{issuer}</p>
            </div>
            <ExternalLink size={20} />
          </a>

          <div className="flex items-center text-gray-400 mt-2 mb-3">
            <Calendar size={16} className="mr-2" />
            <span>{date}</span>
          </div>

          <p className="text-gray-400 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-background-accent rounded-md text-xs font-medium text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-background-accent text-sm text-gray-400">
            Credential ID: {credentialId}
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      name: "Full-Stack Integration course by Microsoft on Coursera",
      issuer: "Coursera",
      date: "May 2025",
      credentialId: "Z00U17CUGNFA",
      link: "https://www.coursera.org/account/accomplishments/certificate/Z00U17CUGNFA",
      description:
        "Full stack integration refers to the seamless connection between the front-end (user interface) and back-end (server, database) of a web application. It ensures smooth data flow, real-time updates, and complete functionality across the entire tech stack.",
      skills: [
        "Development Environment",
        "Back-End Web Development",
        "Performance Tuning",
        "Real Time Data",
        "ASP.NET",
        "Restful API",
        "Full-Stack Web Development",
        "Web Applications",
        "Debugging",
        "Application Programming Interface (API)",
      ],
    },
    {
      name: "Introduction to Machine Learning from IIT Madras (NPTEL)",
      issuer: "NPTEL",
      date: "October 2024",
      credentialId: "NPTEL24CS101S556900224",
      link: "https://archive.nptel.ac.in/noc/B2C/candidate_login/main.php",
      description:
        "Machine Learning is a branch of AI that enables systems to learn from data and improve their performance without explicit programming. It involves algorithms that identify patterns and make decisions with minimal human intervention.",
      skills: [
        "Supervised and unsupervised learning",
        "Data preprocessing and feature engineering",
        "Model training and evaluation (using tools like Scikit-learn)",
        "Regression, classification, and clustering algorithms",
        "Overfitting/underfitting handling and cross-validation techniques",
      ],
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-background-secondary section-container"
    >
      <FadeInView>
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Professional certifications and achievements that validate my
            expertise and commitment to continuous learning.
          </p>
        </div>
      </FadeInView>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <FadeInView key={cert.name} delay={index * 0.1}>
            <CertificationCard {...cert} />
          </FadeInView>
        ))}
      </div>

      <FadeInView delay={0.4}>
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
        </div>
      </FadeInView>
    </section>
  );
};

export default Certifications;
