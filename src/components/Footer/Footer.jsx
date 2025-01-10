import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo2 from "../../assets/moneymama-logo-2.svg";
import css from "./Footer.module.css";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <div className={css.wrapper}>
        <img src={logo2} alt="logo" width={300} />

        <hr style={{ margin: "47px 0", border: "1px solid var(--grey03)" }} />

        <div className={css.columns}>
          <div className={css.copyright}>
            <p>© {currentYear} MoneyMama. All rights reserved</p>
          </div>
          <div className={css.navLinks}>
            <ul className={css.navList}>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className={css.socials}>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
