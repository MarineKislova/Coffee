// component`
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import About from "../components/about/about";
// data
import { cardsItems } from "../data/cardsItemsData";

// styles
import "../pages/CoffeItemPage.scss";

const CoffeeItemPage = ({coffeeBg}) => {
  const coffeeItem = cardsItems[Math.floor(Math.random() * cardsItems.length)];

  return (
    <>
      <Header
        background={coffeeBg}
        className={"coffee-header"}
        title="Our Coffee"
      />
      <div className="coffee-item-page">
        <div className="coffee-item-page__container">
          <div className="coffee-item-page__body">
            
            <img className="coffee-item-page__image" src={coffeeItem.srcSpecial} alt={coffeeItem.altSpecial} />
            <div className="coffee-item-page__row">
              <About className="coffee-item-page" title="About it" />
              <h3 className="coffee-item-page__country">
                {coffeeItem.country}
              </h3>
              <p className="coffee-item-page__description">{coffeeItem.description}</p>
              <p className="coffee-item-page__price">
                Price: <span>{coffeeItem.price}$</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoffeeItemPage;
