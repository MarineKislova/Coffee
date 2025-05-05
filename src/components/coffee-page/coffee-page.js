import Nav from "../nav/nav";
import CoffeeFilter from "../coffee-filter/coffee-filter";
import Footer from "../footer/footer";

import Paragraphs from "../data/paragraph";

import aboutBeans from "../../assets/images/about-beans-img.png";

import "./coffee-page.scss";

const CoffeePage = (props) => {
  const { beansLogoBlack } = props;

  return (
    <div className="coffee-page">
      <header className="coffee-header">
        <div className="coffee-header__container">
          <Nav />
          <h2 className="coffee-header__title"> Our Coffee</h2>
        </div>
      </header>
      <div className="about-beans">
        <div className="about-beans__container">
          <div className="about-beans__body">
            <img
              className="about-beans__img"
              src={aboutBeans}
              alt="aboutBeans"
            />
            <div className="about-beans__row">
              <h3 className="about-beans__title">About our beans</h3>
              <img className="about-beans__logo" src={beansLogoBlack} alt="" />
              <Paragraphs ids={[1]} className="about-beans__paragraph" />
            </div>
          </div>
        </div>
      </div>
      <CoffeeFilter />
      <Footer />
    </div>
  );
};

export default CoffeePage;
