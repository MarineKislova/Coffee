import "./coffee-filter.scss";

const CoffeeFilter = () => {
  return (
    <div className="coffee-filter">
      <div className="coffee-filter__container">
        <div className="coffee-filter__search">
          <label htmlFor="input">Looking for</label>
          <input type="text" placeholder="start typing here..." />
        </div>

        <div className="coffee-filter__items">
          <p>Or filter</p>
          <button type="button">All</button>
          <button type="button">Brazil</button>
          <button type="button">Kenya</button>
          <button type="button">Columbia</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeFilter;
