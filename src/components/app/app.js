import MainNav from "../mainnav/mainnav";
import AboutUs from "../aboutUs/aboutUs";
import CardList from "../card-list/card-list";
import Footer from "../footer/footer";
import CoffeePage from "../coffee-page/coffee-page";

import solimoCoffee from "../../assets/images/item1-main.png";
import prestoCoffee from "../../assets/images/item2-main.png";
import aromisticoCoffee from "../../assets/images/item3-main.png";
import beansLogoBlack from "../../assets/icons/Beans-logo-black.svg";

import "./app.scss";

function App() {
  return (
    <div className="App">
      <MainNav />
      <AboutUs beansLogoBlack={beansLogoBlack} />
      <CardList />
      <Footer />
      {/* {cardsItems.map((card) => (
        <div key={card.id} className="card">
          <img src={card.src} alt={card.alt} />
          <h2>{card.title}</h2>
          <p>Price: {card.price} EUR</p>
        </div>
      ))} */}
      <CoffeePage beansLogoBlack={beansLogoBlack} />
    </div>
  );
}

export default App;
