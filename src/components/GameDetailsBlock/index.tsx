import type {ReactElement} from "react";
import type {GameDetails} from "../../redux/actions/typings/games";

import React from "react";
import ImageGallery from "../ImageGallery";
import CommonStarRating from "../CommonStarRatings";
import './style.scss';

type Props = {
  gameDetails: GameDetails
}

const GameDetailsBlock = ({
  gameDetails: {
    id,
    name,
    background_image,
    background_image_additional,
    rating,
    released,
    description_raw,
    website,
    // genres,
    // developers,
    // dominant_color,
    // platforms,
  }
}: Props): ReactElement => (
  <div className={`game-details-card ${id}`}>
    <div className="game-details-preview">
      <ImageGallery imgUrlsList={[background_image, background_image_additional]} />
    </div>

    <div className="game-details-info">
      <div className="name">{name}</div>
      <p className="helper">{released}</p>
      <CommonStarRating rating={rating} />
      <div className="description">{description_raw}</div>
      <a href={website} className="link" target="_blank">Go to website...</a>
    </div>
  </div>
);

export default GameDetailsBlock;
