import CardListItemMain from "../card-list-item/card-list-item";
import { cardsItems } from "../data/cardsItemsData";
import { getFilteredCards } from "../data/cardsItems";

import "./card-list.scss";

const CardList = ({ cardsItems }) => {
  const mainPageCards = getFilteredCards(cardsItems, { ids: [1, 4, 7] });

  return (
    <div className="card">
      <div className="card__container">
        <div className="card__list">
          <h3 className="card__title">Our best</h3>
          <div className="card__items">{mainPageCards.map(card => (
        <CardListItemMain key={card.id} data={card} className="main-card" />
      ))}</div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
