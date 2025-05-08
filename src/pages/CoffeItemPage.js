// component`
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
// data
import { cardsItems } from "../data/cardsItemsData";
// utils
import Paragraphs from "../utils/paragraph";
// assets
import coffeeBg from "../assets/images/coffee-shop-bckgd-1920.png";

const CoffeeItemPage = () => {
   const coffeeItem = cardsItems[Math.floor(Math.random() * cardsItems.length)];

    return (
        <>
        <Header
                className={"coffee-header"}
                background={coffeeBg}
                title="Our Coffee"
              />
            {/* <Header style={{ backgroundImage: `url(${coffeeBg})` }} /> */}
            <div className="coffee-item-page" >
                <div className="coffee-item-page__container" >
  
                    <h1>{coffeeItem.country}</h1>
                    <img src={coffeeItem.src} alt={coffeeItem.alt} />
                    <Paragraphs paragraphs={coffeeItem.description} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CoffeeItemPage;