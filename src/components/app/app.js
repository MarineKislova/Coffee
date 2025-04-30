import CardList from '../card-list/card-list';

import solimoCoffee from '../../assets/images/item1-main.png';
import prestoCoffee from '../../assets/images/item2-main.png';
import aromisticoCoffee from '../../assets/images/item3-main.png';

import "./app.css";

function App() {
  const cardsList = [
    {
      id: 1,
      alt: "solimoCoffee",
      src: solimoCoffee,
      title: "Solimo Coffee Beans 2 kg",
      price: 10.73,
    },
    {
      id: 2,
      alt: "prestoCoffee",
      src: prestoCoffee,
      title: "Presto Coffee Beans 1 kg",
      price: 15.99,
    },
    {
      id: 3,
      alt: "aromisticoCoffee",
      src: aromisticoCoffee,
      title: "AROMISTICO Coffee 1 kg",
      price: 6.99,
    },
  ];
  return (
    <div className="App">
      <CardList/> 
      {cardsList.map((card) => (
        <div key={card.id} className="card">
          <img src={card.src} alt={card.alt} />
          <h2>{card.title}</h2>
          <p>Price: {card.price} EUR</p>
        </div>
      ))}
    </div>
  );
}

export default App;
