import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import Expertise from "./Expertise";

describe("Expertise.js", () => {
    it('should render the Expertise component', () => {
        render(
            <Expertise data={[ {
                date: '2013-2014',
                info: {
                    company: 'Google',
                    job: 'Front-end developer',
                    description: 'Lorem ipsum dolor sit amet'
                }
            } ]} />
        )
        expect(screen.getByText('2013-2014')).toBeInTheDocument();
        expect(screen.getByText('Google')).toBeInTheDocument();
        expect(screen.getByText('Front-end developer')).toBeInTheDocument();
        expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
    })
})