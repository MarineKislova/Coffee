import { navLinks } from "../../data/navData";
import NavLinks from "../../utils/navLinks";

import beansNavBlack from "../../assets/icons/Beans-nav-black.svg";
import beansLogoBlack from "../../assets/icons/Beans-logo-black.svg";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__inner">
          <a href="/" className="footer__logo-link">
            <img src={beansNavBlack} alt="Logo" />
          </a>
          <NavLinks
            links={navLinks}
            className="footer__nav"
            linkClassName="footer__links"
          />
        </div>

        <div className="footer__logo">
          <img src={beansLogoBlack} alt="Logo" className="footer__logo-img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
