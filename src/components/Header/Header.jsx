import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/MONEYMAMA-logo.svg";
import css from "./Header.module.css";
import classNames from "classnames";

const Header = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    setActiveSection("gettingToKnowYou");
  };

  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <a href="/" style={{ display: "flex" }} onClick={handleLogoClick}>
          <img src={logo} alt="logo" className={css.logo} />
        </a>
        <div
          className={css.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <FaBars className={css.mobileMenu} />
        </div>
        <nav
          className={classNames(css.navLinks, `${isOpen ? css.open : ""}`)}
          onClick={() => setIsOpen(false)}
        >
          <ul className={css.navList}>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
