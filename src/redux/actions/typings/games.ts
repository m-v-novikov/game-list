

export type FilterProps = {[key: string]: string;};

export type GameFromList = {
  id: number;
  name: string;
  rating: number;
  genres: Array<object>;
  background_image: string;
  released: string;
}

export type GameDetails = {
  id: number;
  name: string;
  rating: number;
  genres: Array<object>;
  background_image: string;
  released: string;
  background_image_additional: string;
  description_raw: string;
  developers: Array<object>;
  dominant_color: string;
  platforms: Array<object>;
  website: string;
}