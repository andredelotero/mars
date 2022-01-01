import { useParams } from "react-router";
import { useState } from "react";
import styled from "styled-components";
import { Data } from "./Rovers";
import GetPhotos from "../../services/getPhotos";
import { Header } from "../Header/Header";

const StyledRover = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 4rem;
  font-size: 1.2rem;
  .data {
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
  }
  img {
    padding: 1rem;
    max-width: 100%;
    border: 1px solid #000;
  }
  .camera {
    border: 0;

    padding: 1rem 2rem;
    margin: 0.5rem 2rem 0.5rem 0;
    cursor: pointer;
    background-color: #0d6efd;
    color: #fff;
    &:hover {
      background-color: #0442a0;
    }
  }
`;

const RoverDetail = () => {
  const id = useParams();
  const [rover] = Data.filter((data) => data.name === id.name);
  const [cam, setCamera] = useState("");

  function handleclick(e) {
    e.preventDefault();
    setCamera(e.target.innerText);
  }

  return (
    <>
      <Header name={rover.name} />
      <StyledRover>
        <img src={rover.src} alt="" />
        <div className="data">
          <p>Name: {rover.name}</p>
          <p>Launch: {rover.launch}</p>
          <p>Mission duration: {rover.daysInMission} days</p>
          <br />
          Select a camera:
          <form>
            <button type="submit" className="camera" onClick={handleclick}>
              fhaz
            </button>
            <button type="submit" className="camera" onClick={handleclick}>
              navcam
            </button>
          </form>
        </div>
      </StyledRover>
      {cam !== "" ? <GetPhotos rover={rover.name} camera={cam} /> : null}
    </>
  );
};

export default RoverDetail;
