import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Box from './Box';

describe("Box.js", () => {
    it('should render the Box component', () => {
        render(
            <Box title="Box" content="Lorem ipsum dolor sit amet" />
        );
        expect(screen.getByText("Box")).toBeInTheDocument();
        expect(screen.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
    })
})