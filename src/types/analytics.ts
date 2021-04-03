export type ShopRating = {
  countReviews: number;
  averageRating: number;
  nps: number;
  countPositive: number;
  countNegative: number;
  ratings: {
    rating: number;
    percentage: number;
  }[];
};

export type ShopRatingActivity = {
  countReviews: number;
  countPositive: number;
  countNegative: number;
  countAnonymous: number;
  countNonAnonymous: number;
  items: {
    date: string;
    countPositive: number;
    countNegative: number;
  }[];
};

export enum FilterRatingActivity {
  AllReviews = "allReviews",
  NegativeReviews = "negativeReviews",
  PositiveReviews = "positiveReviews",
}
