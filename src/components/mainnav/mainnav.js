import Nav from "../nav/nav";

import beansLogoWhite from "../../assets/icons/Beans-logo-white.svg";

import "./mainnav.scss";

const MainNav = () => {
  return (
    <header className="main-nav">
      <div className="main-nav__container">
        <Nav />
        <div className="main-nav__body">
          <h1 className="main-nav__title">Everything You Love About Coffee</h1>
          <img
            className="main-nav__logo"
            src={beansLogoWhite}
            alt="Beans logo white"
          />
          <p className="main-nav__text">
            We makes every day full of energy and taste
          </p>
          <p className="main-nav__text">Want to try our beans?</p>
          <button type="button" className="main-nav__btn">
            More
          </button>
        </div>
      </div>
    </header>
  );
};

export default MainNav;
