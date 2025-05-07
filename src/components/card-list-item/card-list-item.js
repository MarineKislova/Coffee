import "./card-list-item.scss";

const Card = ({ data, className }) => {
  return (
    <div className={className}>
      <img src={data.src} alt={data.alt} className="card__img" />
      <h2 className={`${className}__title`}>{data.title}</h2>
      {data.country && <p className="card__country">{data.country}</p>}
      {data.description && (
        <p className="card__description">{data.description}</p>
      )}
      <p className={`${className}__price`}>${data.price}</p>
    </div>
  );
};

export default Card;
