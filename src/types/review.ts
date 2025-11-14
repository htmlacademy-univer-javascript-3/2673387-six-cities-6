type User = {
  name: string;
  avatarUrl: string;
};

type Review = {
  id: string;
  user: User;
  rating: number;
  comment: string;
  date: string;
};

export default Review;
