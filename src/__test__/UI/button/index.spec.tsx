import Button from '@/components/UI/button';
import { render } from '@testing-library/react';

describe('Button Component', () => {
  it('render button component', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
