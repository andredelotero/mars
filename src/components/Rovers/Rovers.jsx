import { Link } from "react-router-dom";
import styled from "styled-components";
import curiosity from "../../img/curiosity.jpg";
import opportunity from "../../img/opportunity.jpg";
import spirit from "../../img/spirit.jpg";
import { Header } from "../Header/Header";

export const Data = [
  {
    src: curiosity,
    name: "Curiosity",
    id: 1,
    launch: "November 26, 2011",
    daysInMission: 686,
  },
  {
    src: opportunity,
    name: "Opportunity",
    id: 2,
    launch: "July 08, 2003",
    daysInMission: 5110,
  },
  {
    src: spirit,
    name: "Spirit",
    id: 3,
    launch: "June 10, 2003",
    daysInMission: 2230,
  },
];

const StyledH1 = styled.h1`
  margin: 40px auto;
  text-align: center;
`;
const StyledContainer = styled.div`
  max-width: 90%;
  margin: 0 auto 40px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const StyledRover = styled.div`
  width: 350px;
  height: 350px;
  overflow: hidden;
  margin-bottom: 2rem;
  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: #000;
  }
  img {
    width: 100%;
    height: auto;
    transition: all 200ms linear;
  }
`;

export const Rovers = () => {
  return (
    <>
      <Header name="Mars" />
      <StyledH1>Select a Rover</StyledH1>
      <StyledContainer>
        {Data.map((rover) => {
          return (
            <Link to={`/roverdetail/${rover.name}`} key={rover.id}>
              <StyledRover>
                <p>{rover.name}</p>

                <img
                  src={rover.src}
                  alt={rover.name}
                  width={400}
                  height={400}
                />
              </StyledRover>
            </Link>
          );
        })}
      </StyledContainer>
    </>
  );
};
