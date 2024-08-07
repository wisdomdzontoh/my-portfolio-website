import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-20 flex items-center justify-center">
      <ul className="flex flex-col py-4 items-center space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
