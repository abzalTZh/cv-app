import '@testing-library/jest-dom';
import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Button from './Button';

describe('Button.js', () => {
    it('should render a button with specified text', () => {
        render(
            <MemoryRouter>
                <Button type="button" text="Click me!" />
            </MemoryRouter>
        );
        expect(screen.getByText('Click me!')).toBeInTheDocument();
    });
    it('navigates to a new route after clicking the button', async () => {
        render(
            <MemoryRouter>
                <Button type="button" text="Click me!" to="/new-route" />
            </MemoryRouter>
        );
        fireEvent.click(screen.getByText('Click me!'));

        await waitFor(() => expect(window.location.pathname).toBe('/new-route'))
    })
    it('fires a button click handler on click', () => {
        const mockConsoleLog = jest.spyOn(console, 'log');

        function clickHandler() {
            console.log('Button clicked');
        }

        render(
            <MemoryRouter>
                <Button type="button" text="Click me!" onClick={clickHandler} />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Click me!'));
        
        expect(mockConsoleLog).toHaveBeenCalledWith('Button clicked');
    })
})
