import { useEffect, useState } from "react";
import "../App.css";
import Spin from "../components/spinner/Spinner";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    width: 350px;
    height: auto;
    display: inline-block;
  }
`;

const StyledPhoto = styled.div`
  margin: 1rem;
`;

const GetPhotos = ({ rover = "spirit", camera = "navcam" }) => {
  const [photos, setPhotos] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=100&camera=${camera}&page=1&api_key=47pbYxALhGM5F1SYEgEhCTpRublugZkyrRbzNhcb`;

  useEffect(() => {
    setSpinner(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
      })
      .finally(() => {
        setSpinner(false);
      });
  }, [url]);
  return (
    <>
      {spinner ? (
        <Spin />
      ) : (
        <StyledContainer>
          {photos.map((photo) => (
            <StyledPhoto key={photo.id}>
              <img className="photo" src={photo.img_src} alt="" />
              <h4>Camera name: {photo.camera.full_name}</h4>
              <h4>Earth date: {photo.earth_date}</h4>
              <h4>Rover name: {photo.rover.name}</h4>
            </StyledPhoto>
          ))}
        </StyledContainer>
      )}
    </>
  );
};

export default GetPhotos;
