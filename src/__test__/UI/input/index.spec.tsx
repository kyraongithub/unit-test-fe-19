import Input from '@/components/UI/input';
import { render } from '@testing-library/react';

describe('input component', () => {
  it('render input text', () => {
    const { container } = render(<Input type="text" value="" />);
    expect(container).toMatchSnapshot();
  });
  it('render input textarea', () => {
    const { container } = render(<Input type="textarea" value="" />);
    expect(container).toMatchSnapshot();
  });
});
