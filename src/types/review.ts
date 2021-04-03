export type Review = {
  lists: {
    id: number;
    code: string;
    isRead: boolean;
    rating: number;
    comment: string;
    phone: string;
    reviewTags: {
      reviewId: 0;
      tagId: 0;
    }[];

    created: string;
    pollId: 0;
  }[];
};
