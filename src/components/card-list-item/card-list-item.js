import "./card-list-item.scss";

const CardListItem = (props) => {
  const { cardList } = props;
  return(
    <div className="card__item">
      <h2>{cardList.name}</h2>
      <p>{cardList.description}</p>
      <p>Price: ${cardList.price}</p>
      <button onClick={() => console.log("Add to cart")}>Add to cart</button>
    </div>
  )

};

export default CardListItem;