import "./card-list-item.scss";


const CardListItem = (props) => {
  const { img, alt, title, price } = props;
  return (
    <div className="card__item">
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <p>{price}$</p>
    </div>
  );
};

export default CardListItem;
