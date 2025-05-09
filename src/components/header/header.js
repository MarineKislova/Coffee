import Nav from "../nav/nav";

const Header = ({ className, background, title }) => (
  <header className={className}>
    <div
      className={`${className}__container`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <Nav />
      <h2 className={`${className}__title`}>{title}</h2>
    </div>
  </header>
);

export default Header;
