import GetPhotos from "../../services/getPhotos";
import { useEffect } from "react";
const PhotoList = () => {
  useEffect(() => {
    fetch(GetPhotos().photos)
      .then((response) => response.json())
      .then((data) => {
        return (
          <ul>
            <li key={data.id}>
              <img src={data.img_src} />
            </li>
          </ul>
        );
      });
  }, []);
};

export default PhotoList;
