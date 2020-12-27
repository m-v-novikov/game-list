import type {ReactElement} from 'react'

import React from 'react';
import StarRatings from 'react-star-ratings';

type Props = {
  rating: number
}

const CommonStarRating = ({rating}: Props): ReactElement => (
  <StarRatings rating={rating} starRatedColor="yellow" starDimension="15px" starSpacing="2px" />
);

export default CommonStarRating;
