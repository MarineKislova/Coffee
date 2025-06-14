// component`
import Header from "../components/header/header";
import Card from "../components/card-list-item/card-list-item";
import About from "../components/about/about";
import Footer from "../components/footer/footer";
// data
import { cardsItems } from "../data/cardsItemsData";
// utils
import { prepareCardsData } from "../utils/prepareCardsData";
import Paragraphs from "../utils/paragraph";
// assets
import aboutBeans from "../assets/images/about-beans-img.png";
// styles
import "../pages/CoffeePage.scss";

const CoffeePage = ({ coffeeBg }) => {
  const coffeeCards = prepareCardsData(cardsItems, {
    omitFields: ["description"],
  });

  return (
    <>
      <Header
        background={coffeeBg}
        className={"coffee-header"}
        title="Our Coffee"
      />
      <div className="about-beans">
        <div className="about-beans__container">
          <div className="about-beans__body">
            <img
              className="about-beans__img"
              src={aboutBeans}
              alt="aboutBeans"
            />
            <div className="about-beans__row">
              <About className={"about-beans"} title="About our beans" />
              <Paragraphs ids={[1]} className="about-beans__paragraph" />
            </div>
          </div>
        </div>
      </div>
      <div className="coffee-filter">
        <div className="coffee-filter__container">
          <div className="coffee-filter__search">
            <label className="coffee-filter__label" htmlFor="input">
              Looking for
            </label>
            <input
              className="coffee-filter__input"
              type="text"
              id="input"
              placeholder="start typing here..."
            />
          </div>

          <div className="coffee-filter__btns">
            <p>Or filter</p>
            <div className="coffee-filter__btn">
              <button type="button">All</button>
              <button type="button">Brazil</button>
              <button type="button">Kenya</button>
              <button type="button">Columbia</button>
            </div>
          </div>
        </div>
      </div>
      <section className="coffee-cards">
        <div className="coffee-cards__container">
          <div className="coffee-cards__items">
            {coffeeCards.map((card) => (
              <Card
                key={card.id}
                data={card}
                className="coffee-item"
                classContainer="coffee-item__container"
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CoffeePage;
