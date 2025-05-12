import { Component } from "react";

// component`
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import About from "../components/about/about";
// data
import { cardsItems } from "../data/cardsItemsData";
import Paragraphs from "../utils/paragraph";
// assets
// import aboutGoods from "../assets/images/about-good-img.png";
// utils
import { prepareCardsData } from "../utils/prepareCardsData";
// styles
import "../pages/GoodPage.scss";

// const GoodsPage = ({ goodBg, line }) => {
//   const cards = prepareCardsData(cardsItems, {
//     omitFields: ["description"],
//   });

//   const randomCard = (array, count) => {
//     const shuffled = [...array].sort(() => Math.random() - 0.5);
//     return shuffled.slice(0, count);
//   };
//   const randomCards = randomCard(cards, 6);

//   return (
//     <>
//       <Header
//         background={goodBg}
//         className={"coffee-header"}
//         title="Our Coffee"
//       />
//       <div className="about-goods">
//         <div className="about-goods__container">
//           <div className="about-goods__row-about">
//             <div className="about-goods__left">
//               <img
//                 className="about-goods__img"
//                 src={aboutGoods}
//                 alt="aboutGoods"
//               />
//             </div>
//             <div className="about-goods__right">
//               <About className={"about-goods"} title="About our goods" />
//               <Paragraphs ids={[2]} className={"about-goods"} />
//             </div>
//           </div>
//           <div className="about-goods__line">
//             <img src={line} alt="line" />
//           </div>
//           <div className="about-goods__row-cards">
//             {randomCards.map((card) => (
//               <div className="about-goods__card" key={card.id}>
//                 <img
//                   className="about-goods__image"
//                   src={card.srcSpecial}
//                   alt={card.alt}
//                 />
//                 <h3>{card.title}</h3>
//                 <p>{card.country}</p>
//                 <p>
//                   <span>{card.price}$</span>
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

class GoodsPage extends Component {
  constructor(props) {
    super(props);
    const cards = prepareCardsData(cardsItems, { omitFields: ["description"] });

    // случайный выбор карточек
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    const randomCards = shuffled.slice(0, 6);

    this.state = {
      selectedImage: cardsItems[5].srcSpecial,
      // cards: cards,
      cards: randomCards,
    };
  }

  handleCardClick = (imgSrc) => {
    this.setState({ selectedImage: imgSrc });
  };

  render() {
    const { goodBg, line } = this.props;
    const { selectedImage, cards } = this.state;

    return (
      <>
        <Header
          background={goodBg}
          className={"coffee-header"}
          title="Our Coffee"
        />
        <div className="about-goods">
          <div className="about-goods__container">
            <div className="about-goods__row-about">
              <img
                className="about-goods__img"
                src={selectedImage}
                alt="selectedImage"
              />
              <div className="about-goods__right">
                <About className={"about-goods"} title="About our goods" />
                <Paragraphs ids={[2]} className={"about-goods"} />
              </div>
            </div>
            <div className="about-goods__line">
              <img src={line} alt="line" />
            </div>
            <div className="about-goods__row-cards">
              {cards.map((card) => (
                <div
                  className="about-goods__card"
                  key={card.id}
                  onClick={() => this.handleCardClick(card.srcSpecial)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="about-goods__image"
                    src={card.srcGood}
                    alt={card.alt}
                  />
                  <h3>{card.title}</h3>
                  <p>{card.country}</p>
                  <p>
                    <span>{card.price}$</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default GoodsPage;
