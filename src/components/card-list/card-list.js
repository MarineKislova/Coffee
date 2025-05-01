import CardListItem from "../card-list-item/card-list-item";

import "./card-list.scss";

const CardList = ({ cardsItems }) => {
  const cardItem = cardsItems.map((card) => (
    <CardListItem
      key={card.id}
      img={card.src}
      alt={card.alt}
      title={card.title}
      price={card.price}
    />
  ));
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__list">
          <h3 className="card__title">Our best</h3>
          <div className="card__items">{cardItem}</div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
