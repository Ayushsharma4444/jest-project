import { fireEvent, render ,screen } from "@testing-library/react";
import Counter from "../programs/Counter";


test('Counter component renders correctly', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByTestId('count')).toHaveTextContent('1');

    // fireEvent.click(screen.getByText('Decrement'));
    // expect(screen.getByText('Counter: 0')).toBeInTheDocument();
})