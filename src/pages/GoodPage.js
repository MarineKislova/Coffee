// component`
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import About from "../components/about/about";
// data
import { cardsItems } from "../data/cardsItemsData";
import Paragraphs from "../utils/paragraph";
// assets
import goodBg from "../assets/images/goods-shop-bckgd-1920.png";
import aboutGoods from "../assets/images/about-good-img.png";
// utils
import { prepareCardsData } from "../utils/prepareCardsData";
// styles
import "../pages/GoodPage.scss";

const GoodsPage = () => {
    const cards = prepareCardsData(cardsItems, {
        ids: [2, 5, 8],
        omitFields: ["description", "country"],
    });

    return(
        <>
        <Header
        background={goodBg}
        className={"coffee-header"}
        title="Our Coffee"
      />
<div className="about-goods"></div>
      <Footer/> 
        </>
    )
};


export default GoodsPage;