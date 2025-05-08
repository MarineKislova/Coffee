import styled from "styled-components";
import Nav from "../nav/nav";
// import bgImages from "../../data/backGround";

// Styled-component с фоновым изображением через проп
const HeaderContainer = styled.div`
background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  max-height: 260px;
  display: flex;
  flex-direction: column;
`;

const Header = ({className, background, title }) => (
  <header className={className}>
    <HeaderContainer $bg={background} className={`${className}__container`}>
      <Nav />
      <h2 className={`${className}__title`}>{title}</h2>
    </HeaderContainer>
  </header>
);

export default Header;
