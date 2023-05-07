import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button.component';

describe('Button', () => {
  it('should render <button>', () => {
    render(<Button>text</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('text');
  });

  it.each(['text1', 'text2'])(
    'should render <button> with text = $s',
    (text) => {
      render(<Button>{text}</Button>);

      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button.textContent).toBe(text);
    }
  );

  it('on button click callback should be called', () => {
    const callback = vi.fn();

    render(<Button onClick={callback}>text</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(callback).toBeCalled();
  });
});
