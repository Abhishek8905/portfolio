"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Tasty Food (UI/UX)",
    description: "UI UX design of a food ordering web application",
    image: "/images/projects/tasty-food.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhishek8905/Tasty-Food",
    previewUrl: "https://negiadarsh.github.io/Tasty-Food/",
  },
  {
    id: 2,
    title: "To-do-List",
    description: "Generate an original name list that’s exclusively yours, safeguarded from modifications by devising a unique name as its guardian. This ensures that other users cannot alter the contents.",
    image: "/images/projects/to-do-list.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Abhishek8905/To-Do-List-project",
    previewUrl: "https://to-do-list-qjtq.onrender.com/",
  },
  {
    id: 3,
    title: "Virtual Instrument",
    description: "A digital audio workstation (DAW) that allows users to create, edit, and produce music using virtual instruments and effects. Features include MIDI input support, audio recording, and real-time audio processing.",
    image: "/images/projects/virtual-instrument.png",
    tag: ["All", "Web", "Audio"],
    gitUrl: "https://github.com/Abhishek8905/mini-project2",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Pharma Guide",
    description: "A comprehensive pharmaceutical guide application that provides detailed information about medications, their uses, side effects, and drug interactions. Features include medication search, dosage guides, and drug interaction checker.",
    image: "/images/projects/pharma-guide.png",
    tag: ["All", "Web", "Healthcare"],
    gitUrl: "https://github.com/Abhishek8905/pharma-guide",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Bank Management System",
    description: "A comprehensive banking solution that streamlines account management, transaction processing, and customer service operations. Features include account creation, balance inquiries, fund transfers, and transaction history tracking.",
    image: "/images/projects/bank-management.png",
    tag: ["All", "Web", "Finance"],
    gitUrl: "https://github.com/Abhishek8905/Bank-management-system",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Heart Disease Prediction",
    description: "A machine learning-based predictive model that analyzes patient data to predict the likelihood of heart disease. Utilizes advanced algorithms and statistical analysis to provide accurate risk assessment.",
    image: "/images/projects/heart-disease.png",
    tag: ["All", "AI/ML", "Healthcare"],
    gitUrl: "https://github.com/Abhishek8905/heart-disease-prediction",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
