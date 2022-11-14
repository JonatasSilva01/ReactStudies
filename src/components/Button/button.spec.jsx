import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

describe('<Button />', () => {
    it('hope the button renders on the screen', () => {
        const fn = jest.fn();
        render(<Button text='load more' onClick={fn} />)
        expect.assertions(1);
        expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const fn = jest.fn()
        render(<Button text="load more" onClick={fn} />);
        const button = screen.getByRole('button', { name: /load more/i })
        userEvent.click(button)
        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('hope the button is disabled when it s true', () => {
        render(<Button text="load more" disabled={true} />)
        expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled();
    });

    it('hope the button is Enabled when it s false', () => {
        render(<Button text="load more" disabled={false} />)
        // expect(screen.getByRole('button', { name: /load more/i })).not.toBeDisabled();
        expect(screen.getByRole('button', { name: /load more/i })).toBeEnabled();
    });

    
});
