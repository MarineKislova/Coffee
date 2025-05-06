

import "./card-list-item.scss";


const CardListItemMain = ({ data, className }) => {

  return (
    <div className={`card ${className}`}>
      <img src={data.src} alt={data.alt} className="card__img" />
      <h3 className="card__title">{data.title}</h3>
      <p className="card__country">{data.country}</p>
      <p className="card__description">{data.description}</p>
      <div className="card__price">${data.price}</div>
    </div>
  );
};

export default CardListItemMain;
