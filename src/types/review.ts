type User = {
  name: string;
  avatarUrl: string;
};

type Review = {
  id: string;
  offerId: string;
  user: User;
  rating: number;
  comment: string;
  date: string;
};

export default Review;
