import "./card-list-item.scss";

const Card = ({ data, className, classContainer }) => {
  return (
    <div className={className}>
      <div className={classContainer}>
        <img src={data.src} alt={data.alt} className={`${className}__img`} />
        <h2 className={`${className}__title`}>{data.title}</h2>
        {data.country && (
          <p className={`${className}__country`}>{data.country}</p>
        )}
        {data.description && (
          <p className={`${className}__description`}>{data.description}</p>
        )}
        <p className={`${className}__price`}>${data.price}</p>
      </div>
    </div>
  );
};

export default Card;
