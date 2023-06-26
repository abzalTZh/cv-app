import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Feedback from './Feedback';
import feedbackUser from '../../assets/feedback-user.jpg';

describe("Feedback.js", () => {
    it('should render the component correctly', () => {
        render(
            <Feedback data={[ {
                feedback: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
                reporter: { 
                    photoUrl: feedbackUser, 
                    name: 'John Doe', 
                    citeUrl: 'https://www.citeexample.com' 
                } 
            } ]} />
        );
        expect(screen.getByText("Lorem ipsum dolor sit amet,", {exact: false})).toBeInTheDocument();
        expect(screen.getByAltText(/^[A-Za-z]+\s[A-Za-z]+\sheadshot$/)).toBeInTheDocument();
        expect(screen.getByText('citeexample.com')).toBeInTheDocument();

    })
})
