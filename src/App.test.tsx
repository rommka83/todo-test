import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('render header and form', () => {
    render(<App />);
    expect(screen.getByText(/todos/i)).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('todo-item added and completed', () => {
    render(<App />);
    const input = screen.getByTestId('input');
    const form = screen.getByTestId('form');
    fireEvent.change(input, { target: { value: 'test text' } });
    fireEvent.submit(form, { bubbles: true, cancelable: true });
    expect(screen.getByTestId('todo-item')).toBeInTheDocument();
    expect(screen.getByTestId('todo-item')).toHaveTextContent('test text');
    expect(screen.getByTestId('ring')).toBeInTheDocument();

    const checkRing = screen.getByTestId('ring');
    fireEvent.click(checkRing, {
      bubbles: true,
      cancelable: true,
      button: 0,
      composed: true,
    });

    expect(screen.getByTestId('check')).toBeInTheDocument();
  });

  it('todo-item deleted', () => {
    render(<App />);

    const clear = screen.getByTestId('clear');
    fireEvent.click(clear, {
      bubbles: true,
      cancelable: true,
      button: 0,
      composed: true,
    });

    const item = screen.queryByText('test text');
    expect(item).toBeNull();
  });
});
