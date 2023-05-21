import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import store from '../../app/store';
import Skills from './Skills';

describe("Skills.js", () => {
    it('should render the component correctly', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Skills />
                </Router>
            </Provider>
        )
        expect(screen.getByText("Open edit")).toBeInTheDocument();
    })
    it('toggles form on button click', () => {
        render(
            <Provider store={store}>
                <Router>
                    <Skills />
                </Router>
            </Provider>
        )

        fireEvent.click(screen.getByText('Open edit'));
        expect(screen.getByText("Skill Name")).toBeInTheDocument();
    })
    it('shows errors when form input does not meet requirements', async () => {
        const user = userEvent.setup();
        render(
            <Provider store={store}>
                <Router>
                    <Skills />
                </Router>
            </Provider>
        )

        fireEvent.click(screen.getByText('Open edit'));
        expect(screen.getByText("Skill Name")).toBeInTheDocument();

        await user.click(screen.getByPlaceholderText('Enter skill name'));
        await user.click(screen.getByText("Skills"));
        expect(await screen.findByText("Skill name is a required field")).toBeInTheDocument;

        await user.click(screen.getByPlaceholderText('Enter skill range'));
        await user.click(screen.getByText("Skills"));
        expect(await screen.findByText("Skill range is a required field")).toBeInTheDocument;

        await user.click(screen.getByPlaceholderText('Enter skill range'));
        await user.keyboard('1');
        await user.click(screen.getByText("Skills"));
        expect(await screen.findByText("Skill range must be greater than or equal to 10")).toBeInTheDocument;
        await user.clear(screen.getByPlaceholderText('Enter skill range'));

        await user.click(screen.getByPlaceholderText('Enter skill range'));
        await user.keyboard('1a');
        await user.click(screen.getByText("Skills"));
        expect(await screen.findByText("Skill range must be a 'number' type")).toBeInTheDocument;
        await user.clear(screen.getByPlaceholderText('Enter skill range'));

        await user.click(screen.getByPlaceholderText('Enter skill range'));
        await user.keyboard('1000');
        await user.click(screen.getByText("Skills"));
        expect(await screen.findByText("Skill range must be less than or equal to 100")).toBeInTheDocument;
        await user.clear(screen.getByPlaceholderText('Enter skill range'));
    })
})