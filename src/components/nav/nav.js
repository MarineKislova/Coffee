import "./nav.scss";

import logoBeansWhite from "../../assets/icons/Logo-nav.svg";

const Nav = () => {
  let links = [
    { type: "logo", src: logoBeansWhite },
    { type: "link", label: "Our coffee" },
    { type: "link", label: "For your pleasure" },
    { type: "link", label: "About us" },
  ];

  const linkList = links.map((link, index) => (
    <li key={index} className="navbar__item">
      {link.type === "logo" ? (
        <a className="navbar__link" href="#">
          <img src={link.src} alt="Logo" className="navbar__logo" />
        </a>
      ) : (
        <a className="navbar__link" href="#">
          {link.label}
        </a>
      )}
    </li>
  ));

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__list">{linkList}</ul>
      </div>
    </nav>
  );
};

export default Nav;
