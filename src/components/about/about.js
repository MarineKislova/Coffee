import aboutBeans from "../../assets/icons/Beans-logo-black.svg";

const About = ({ className, title }) => (
  <>
    <h3 className={`${className}__title`}>{title}</h3>
    <img className={`${className}__logo`} src={aboutBeans} alt="About Beans" />
  </>
);

export default About;
