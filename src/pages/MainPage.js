// component`
import Nav from "../components/nav/nav";
import Card from "../components/card-list-item/card-list-item";
import Footer from "../components/footer/footer";
// data
import { cardsItems } from "../data/cardsItemsData";
// utils
import { prepareCardsData } from "../utils/prepareCardsData";
import Paragraphs from "../utils/paragraph";
// assets
import beansLogoWhite from "../assets/icons/Beans-logo-white.svg";
import beansLogoBlack from "../assets/icons/Beans-logo-black.svg";
// styles
import "../pages/MainPage.scss";

const MainPage = () => {
  const cards = prepareCardsData(cardsItems, {
    ids: [1, 4, 7],
    omitFields: ["description", "country"],
  });

  return (
    <>
      <header className="main-nav">
        <div className="main-nav__container">
          <Nav />
          <div className="main-nav__body">
            <h1 className="main-nav__title">
              Everything You Love About Coffee
            </h1>
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
      <div className="about-us">
        <div className="about-us__container">
          <h2 className="about-us__title">About Us</h2>
          <img
            src={beansLogoBlack}
            alt="Beans logo"
            className="about-us__logo"
          />
          <Paragraphs ids={[1]} className="about-us__paragraph" />
          <Paragraphs ids={[2]} className="about-us__paragraph" />
        </div>
      </div>
      <div className="card">
        <div className="card__container">
          <div className="card__list">
            <h3 className="card__title">Our best</h3>
            <div className="card__items">
              {cards.map((card) => (
                <Card key={card.id} data={card} className="main-item" classContainer="main-item__container" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MainPage;
