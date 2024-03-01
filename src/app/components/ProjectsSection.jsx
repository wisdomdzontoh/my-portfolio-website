"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "This project was developed to share my projects with stakeholders",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/wisdomdzontoh/my-portfolio-website",
    previewUrl: "https://my-portfolio-website-indol-gamma.vercel.app/",
  },
  {
    id: 2,
    title: "Electronic Voting systems",
    description: "This project helps organizations cast thier votes for candidates from anywhere",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/wisdomdzontoh/Automated-Voting-System",
    previewUrl: "http://evotingsystem.42web.io/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "This project has two separate parts, the frontend and backend.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/wisdomdzontoh/react-crud-api-frontend",
    previewUrl: "https://react-api-frontend.onrender.com/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "A food ordering app that was developed to help customers track their oders and avoid going inperson to take food. This project is still in the development phase",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/wisdomdzontoh/mern-food-ordering-app-frontend",
    previewUrl: "https://mern-food-ordering-app-frontend-jn4u.onrender.com",
  },
  {
    id: 5,
    title: "Laravel Mysql Template",
    description: "Authentication and CRUD operations in laravel, adding products, deleting product, updating and viewing products",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/wisdomdzontoh/crud-app",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Electronic medical records system",
    description: "This project was developed to improve data ccuracy by health facilities in greater accra.In terms of monthly reports generated",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/wisdomdzontoh/Data-link-EMRS",
    previewUrl: "http://farmhouse.42web.io/",
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
