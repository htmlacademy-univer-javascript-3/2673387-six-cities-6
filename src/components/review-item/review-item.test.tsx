import { render, screen } from '@testing-library/react';
import ReviewItem from './review-item.tsx';
import Review from '../../types/review.ts';
describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const mockReview = {
      id: '1',
      date: '2023-05-25T12:00:00.000Z',
      user: {
        name: 'Max',
        avatarUrl: 'img/avatar.jpg',
        isPro: false
      },
      comment: 'Nice place!',
      rating: 4
    } as Review;

    render(<ReviewItem review={mockReview} />);

    expect(screen.getByText('Max')).toBeInTheDocument();
    expect(screen.getByText('Nice place!')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', 'img/avatar.jpg');
  });
});
