import Home from '@/components/pages/homepage';
import { render } from '@testing-library/react';

describe('Home Page', () => {
  it('render homepage component', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
