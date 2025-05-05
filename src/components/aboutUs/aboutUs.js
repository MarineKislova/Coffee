import Paragraphs from "../data/paragraph";

import "./aboutUs.scss";

const AboutUs = (props) => {
   const { beansLogoBlack } = props;

  return (
    <div className="about-us">
      <div className="about-us__container">
        <h2 className="about-us__title">About Us</h2>
        <img src={beansLogoBlack} alt="Beans logo" className="about-us__logo" />
        <Paragraphs ids={[1]} className="about-us__paragraph" />
        <Paragraphs ids={[2]} className="about-us__paragraph" />
      </div>
    </div>
  );
};



export default AboutUs;
