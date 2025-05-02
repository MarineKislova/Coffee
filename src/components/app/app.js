import MainNav from "../mainnav/mainnav";
import AboutUs from "../aboutUs/aboutUs";
import CardList from "../card-list/card-list";
import Footer from "../footer/footer";

import solimoCoffee from "../../assets/images/item1-main.png";
import prestoCoffee from "../../assets/images/item2-main.png";
import aromisticoCoffee from "../../assets/images/item3-main.png";

import "./app.scss";

function App() {
  const cardsItems = [
    {
      id: 1,
      alt: "solimoCoffee",
      src: solimoCoffee,
      country: "",
      description:
        "The Solimo coffee is made with finely ground coffee beans, and it has a clean, smooth flavor. It's perfect for those who enjoy a strong, full-bodied flavor.",
      price: 13.99,
      title: "Solimo Coffee Beans 2 kg",
      price: 10.73,
    },
    {
      id: 2,
      alt: "prestoCoffee",
      src: prestoCoffee,
      title: "Presto Coffee Beans 1 kg",
      country: "",
      description:
        "The Presto coffee is made with finely ground coffee beans, and it has a clean, smooth flavor.",
      price: 15.99,
    },
    {
      id: 3,
      alt: "aromisticoCoffee",
      src: aromisticoCoffee,
      title: "AROMISTICO Coffee 1 kg",
      country: "",
      description:
        "The Aromistico coffee has a complex flavor profile with notes of jasmine, citrus, and earthiness.",
      price: 6.99,
    },
  ];

 
 
  return (
    
    <div className="App">
      <MainNav />
      <AboutUs />
      <CardList cardsItems={cardsItems} />
      <Footer /> 
      {/* {cardsItems.map((card) => (
        <div key={card.id} className="card">
          <img src={card.src} alt={card.alt} />
          <h2>{card.title}</h2>
          <p>Price: {card.price} EUR</p>
        </div>
      ))} */}
    </div>
  );
}

export default App;
