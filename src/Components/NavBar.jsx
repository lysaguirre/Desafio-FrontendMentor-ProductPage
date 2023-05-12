import LogoMarca from "./assets/images/logo.svg";
import AvatarImg from "./assets/images/image-avatar.png";
import { useArrayCart } from "../context/useArrayCart";

import MenuIcon from "./icons/MenuIcon";
import CartWidget from "./icons/CartWidget";
import CloseIcon from "./icons/CloseIcon";
import { useContext, useState } from "react";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

import CartDetails from "./CartDetails";

const NavBar = () => {
  const { totalWidget } = useContext(useArrayCart);
  const [navClass, setNavClass] = useState(
    "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0 "
  );

  const handleOpenMenu = () => {
    setNavClass(
      "absolute font-bold top-0 left-0 gap-y-5  bg-white h-full p-8 flex flex-col md:mr-auto md:flex-row md:gap-4 w-4/5 md:static md:p-0 md:h-auto z-10"
    );
  };
  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4 md:p-0"
    );
  };

  const [isOpenCartDetails, setOpenDetailsCart] = useState(false);
  return (
    <>
      <header className=" container mx-auto flex items-center justify-between gap-8 p-4 md:p-0 ">
        <button className="md:hidden" onClick={handleOpenMenu}>
          <MenuIcon />
        </button>
        <Link to="/">
          <img
            src={LogoMarca}
            alt="logo"
            className="mb-1 h-5 md:block mr-auto"
          />
        </Link>
        <nav className={navClass}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>

          <NavLink text={<Link to={"/Collections"}>Collections</Link>} />
          <NavLink text={<Link to={"/Men"}>Men</Link>} />
          <NavLink text={<Link to={"/Women"}>Women</Link>} />
          <NavLink text={<Link to={"/About"}>About</Link>} />
          <NavLink text={<Link to={"/Contact"}>Contact</Link>} />
        </nav>

        <div className=" flex gap-4">
          <button
            className="relative "
            onClick={() => setOpenDetailsCart(!isOpenCartDetails)}
          >
            <CartWidget />
            <span className="bg-orange-400 px-1 text-xs rounded-full text-white font-bold absolute top-0 right-0 translate-x-1">
              {totalWidget}
            </span>
          </button>

          <img src={AvatarImg} alt="avatar" className="w-10" />
          {isOpenCartDetails && <CartDetails />}
        </div>
      </header>
      <span className="container mx-auto hidden md:block h-[1px] w-full bg-gray-500"></span>
    </>
  );
};

export default NavBar;
