import Button from '@/components/UI/button';
import { fireEvent, render } from '@testing-library/react';

describe('Button Component', () => {
  it('render button component', () => {
    const { container } = render(<Button onclick={() => {}}>test</Button>);
    expect(container).toMatchSnapshot();
  });
  it('handle button click', () => {
    const clickFunction = jest.fn();
    const { getByText } = render(<Button onclick={clickFunction}>test</Button>);
    fireEvent.click(getByText('test'));
    expect(clickFunction).toHaveBeenCalled();
  });
});
