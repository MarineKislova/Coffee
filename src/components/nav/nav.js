
import NavLinks from "../data/navLinks";
import { navLinks } from "../data/navData";

import "./nav.scss";

import beansNav from "../../assets/icons/Beans-nav.svg";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="/" className="navbar__logo-link">
          <img src={beansNav} alt="Logo" />
        </a>
        <NavLinks
          links={navLinks}
          className="navbar__list"
          linkClassName="navbar__item"
        />
      </div>
    </nav>
  );
};

export default Nav;
