import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 px-4 text-[#ADB7BE] text-xl rounded hover:text-white transition-colors duration-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;
