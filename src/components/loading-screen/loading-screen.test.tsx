import { render } from '@testing-library/react';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    const { container } = render(<LoadingScreen />);
    expect(container.getElementsByClassName('loading-screen').length).toBe(1);
    expect(container.getElementsByClassName('spinner').length).toBe(1);
  });
});
