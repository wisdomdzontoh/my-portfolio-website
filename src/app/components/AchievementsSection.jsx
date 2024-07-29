"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 bg-[#121212]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center sm:text-left"
          >
            <h2 className="text-white text-4xl font-bold flex items-center">
              {achievement.prefix && <span className="text-[#ADB7BE]">{achievement.prefix}</span>}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (index + 1),
                })}
              />
              {achievement.postfix && <span className="text-[#ADB7BE]">{achievement.postfix}</span>}
            </h2>
            <p className="text-[#ADB7BE] text-base mt-2">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
