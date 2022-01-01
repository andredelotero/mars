import mars from "../../img/mars.webp";
import styled from "styled-components";

const StyledHeader = styled.div`
  margin-top: 65px;
  width: 100%;
  max-width: 1440px;
  background-image: url(${mars});
  height: 650px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 14vw;
    letter-spacing: 2px;
  }
  @media screen and (min-width: 850px) {
    h1 {
      font-size: 100px;
    }
  }
`;

export const Header = ({ name }) => {
  return (
    <StyledHeader>
      <h1>{name}</h1>
    </StyledHeader>
  );
};
