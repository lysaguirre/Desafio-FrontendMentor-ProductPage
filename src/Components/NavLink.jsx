const NavLink = ({ text }) => {
  return (
    <a href="#" className="group py-8 relative">
      <span className="group-hover:text-orange-400">{text}</span>
      <span className=" absolute bottom-0 left-0 block h-1 w-full scale-x-0 transition-all duration-300 group-hover:scale-x-100  group-hover:bg-orange-400 "></span>
    </a>
  );
};

export default NavLink;
