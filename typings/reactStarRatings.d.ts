
declare module 'react-star-ratings' {
  import * as React from "react";

  interface StarRatingsProps {
    rating: number;
    starRatedColor: string;
    starDimension: string;
    starSpacing: string;
  }

  export default class StarRatings extends React.Component<StarRatingsProps> {}
}

