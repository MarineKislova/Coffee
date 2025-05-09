import MainPage from "../../pages/MainPage";
import CoffeePage from "../../pages/CoffeePage";
import CoffeeItemPage from "../../pages/CoffeItemPage";
import GoodsPage from "../../pages/GoodPage";

import "./app.scss";

function App() {
  return (
    <div className="App">
      <MainPage />
      <CoffeePage />
      <CoffeeItemPage />
      <GoodsPage />
    </div>
  );
}

export default App;
