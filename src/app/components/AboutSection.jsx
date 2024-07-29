"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Java</li>
        <li>Python</li>
        <li>PHP</li>
        <li>APIs</li>
        <li>Flutter</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Ghana Communication Technology University</li>
        <li>ALX Software Engineering</li>
        <li>College of Health Kintampo</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-8 px-4" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Me Image"
          className="rounded-lg shadow-lg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg mb-8">
            I am a full stack web developer and experienced health data analyst with a passion for creating
            interactive and responsive web applications. I have experience working with JavaScript, React, PHP, 
            Node.js, Express, PostgreSQL, MySQL, MongoDB, RESTful APIs, HTML, CSS, and Git. I am a quick learner 
            and I am always looking to expand my knowledge and skill set. I am a team player and excited to work 
            with others to create amazing applications and data science projects.
          </p>
          <div className="flex space-x-4 mb-8">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>
          <div>
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
