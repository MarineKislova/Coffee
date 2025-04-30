import CardListItem from "../card-list-item/card-list-item";

import "./card-list.scss";



const CardList = ( {CardListItem} ) => {
    const cardItem = CardListItem.map((card) => (
        <CardListItem key={card.id} card={card} />
    ));
    return (
        <div className="card-list">
            {cardItem}
        </div>
    );
};

export default CardList;