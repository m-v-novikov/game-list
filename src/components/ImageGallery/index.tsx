import type {ReactElement} from "react";

import React, {useState} from "react";
import './style.scss';

type Props = {
  imgUrlsList: Array<string>
}
// https://www.npmjs.com/package/react-viewer - may use it component
const ImageGallery = ({imgUrlsList = []}: Props): ReactElement => {
  const [activeImg, setActiveImg] = useState(imgUrlsList[0] || '');

  return (
    <div className="image-gallery__wrap">
      <div className="image-gallery__active-image" style={{backgroundImage: `url(${activeImg})`}} />

      <div className="image-gallery__images-list">
        {imgUrlsList.map((image, i) => (
          <div key={i} className={image === activeImg ? 'active' : ''} onClick={() => setActiveImg(image)}>
            <div className="image-gallery__image" style={{backgroundImage: `url(${image})`}} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default ImageGallery;
