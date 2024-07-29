import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg">
      <div
        className="h-52 md:h-72 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute inset-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 rounded-full border-[#ADB7BE] hover:border-white transition-colors duration-300"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white transition-colors duration-300" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white transition-colors duration-300"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white transition-colors duration-300" />
          </Link>
        </div>
      </div>
      <div className="text-white mt-3 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
