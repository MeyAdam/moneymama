import React from "react";
import logo from "../../assets/MONEYMAMA-logo.svg";
import css from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <img src={logo} alt="logo" className={css.logo} />
        <nav>
          <ul className={css.navList}>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
