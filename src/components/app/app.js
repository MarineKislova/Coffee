import MainPage from "../../pages/MainPage";
import CoffeePage from "../../pages/CoffeePage";
import CoffeeItemPage from "../../pages/CoffeItemPage";
import GoodsPage from "../../pages/GoodPage";

//assets 
// backgrounds for each page header
import mainBG from "../../assets/images/Main-bg.jpg";
import coffeeBg from "../../assets/images/coffee-shop-bckgd-1920.png";
import goodBg from "../../assets/images/goods-shop-bckgd-1920.png";
//line
import line from "../../assets/images/Line.png";

import "./app.scss";

function App() {
  return (
    <div className="App">
      <MainPage mainBG={mainBG} />
      <CoffeePage coffeeBg={coffeeBg} line={line} />
      <CoffeeItemPage coffeeBg={coffeeBg} />
      <GoodsPage goodBg={goodBg} line={line} />
    </div>
  );
}

export default App;
