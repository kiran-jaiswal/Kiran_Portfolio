import React from "react";
import { Calendar, Award, Star } from "lucide-react";
import FadeInView from "./FadeInView";

interface EducationItem {
  degree: string;
  institution: string;
  years: string;
  description: string;
  achievements?: string[];
}

const EducationTimelineItem: React.FC<EducationItem> = ({
  degree,
  institution,
  years,
  description,
  achievements,
}) => {
  return (
    <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-primary-600/30">
      <div className="absolute left-0 top-0 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2"></div>
      <div className="card mb-8">
        <div className="flex items-center text-gray-400 mb-2">
          <Calendar size={16} className="mr-2" />
          <span>{years}</span>
        </div>
        <h3 className="text-xl font-semibold mb-1">{degree}</h3>
        <h4 className="text-primary-400 mb-3">{institution}</h4>
        <p className="text-gray-400 mb-4">{description}</p>

        {achievements && achievements.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-accent-400">
              <Award size={16} />
              <span className="font-medium">Achievements</span>
            </div>
            <ul className="space-y-1 pl-6">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-gray-400 flex items-start gap-2"
                >
                  <Star
                    size={14}
                    className="mt-1 text-primary-500 flex-shrink-0"
                  />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const educationHistory: EducationItem[] = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Lovely Professional University, Punjab",
      years: "2022 - 2026",
      description:
        "Coursework in Data Structures, Operating Systems, OOP, and Web Development. Focused on real-world project building and applied AI concepts.",
      achievements: [
        "Current CPI: 7.08 (till 5th semester)",
        "Solved 500+ problems on LeetCode, HackerRank, GFG, and CodeForces",
        "Qualified round 1 of Myntra Hacker ramp: WeForShe 2024",
        "Among top 10 teams in Smart India Hackathon 2024",
        "Built college-level projects like Resume Builder and Virtual ICU Visits",
      ],
    },
    {
      degree: "Intermediate Education",
      institution: "Central Public Academy, Belthara Road, Ballia",
      years: "2019 - 2021",
      description:
        "Completed 10+2 education under the CBSE curriculum with core subjects in Physics, Chemistry, and Mathematics.",
      achievements: ["Scored 72% overall"],
    },
    {
      degree: "High School Education",
      institution: "Gyan Kunj Academy, Ballia",
      years: "2017 - 2019",
      description:
        "Completed secondary education under the CBSE board with a strong academic foundation in science and mathematics.",
      achievements: ["Scored 81% overall"],
    },
  ];

  return (
    <section
      id="education"
      className="bg-background-secondary section-container"
    >
      <FadeInView>
        <div className="text-center mb-16">
          <h2 className="section-title inline-block">Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            My educational background has equipped me with the knowledge and
            skills to excel in software development and design.
          </p>
        </div>
      </FadeInView>

      <div className="max-w-3xl mx-auto">
        {educationHistory.map((item, index) => (
          <FadeInView key={index} delay={index * 0.2} direction="left">
            <EducationTimelineItem {...item} />
          </FadeInView>
        ))}
      </div>

      <FadeInView delay={0.4}>
        <div className="text-center mt-10">
          <a href="#" className="btn-outline">
            View Complete Resume
          </a>
        </div>
      </FadeInView>
    </section>
  );
};

export default Education;
