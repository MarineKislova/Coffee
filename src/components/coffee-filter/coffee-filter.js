import "./coffee-filter.scss";

const CoffeeFilter = () => {
  return (
    <div className="coffee-filter">
      <div className="coffee-filter__container">
        <div className="coffee-filter__search">
          <label className="coffee-filter__label" htmlFor="input">
            Looking for
          </label>
          <input
            className="coffee-filter__input"
            type="text"
            id="input"
            placeholder="start typing here..."
          />
        </div>

        <div className="coffee-filter__btns">
          <p>Or filter</p>
          <div className="coffee-filter__btn">
            <button type="button">All</button>
            <button type="button">Brazil</button>
            <button type="button">Kenya</button>
            <button type="button">Columbia</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeFilter;
