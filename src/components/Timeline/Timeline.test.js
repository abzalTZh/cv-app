import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import store from '../../app/store';
import Timeline from './TimeLine';

const server = setupServer(
    rest.get('api/educations', (req, res, ctx) => {
      return res(
        ctx.json({
            educations: [
                { 
                    "date": 2001, 
                    "title": "Title 0", 
                    "text": "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n" 
                }
            ]
        })
      );
    })
);

describe("Timeline.js", () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    afterEach(() => server.resetHandlers());

    it('should show the loading screen while fetching data', () => {
        render(
            <Provider store={store}>
                <Timeline />
            </Provider>
        )
        expect(screen.getByTestId("loading-test")).toBeInTheDocument();
    })
    it("should correctly render the component after fetching", async () => {
        render(
            <Provider store={store}>
                <Timeline />
            </Provider>
        )

        expect(await screen.findByText('Title 0')).toBeInTheDocument();
    })
    it("should show an error message if failed to fetch", async () => {
        server.use(
            rest.get('api/educations', (req, res, ctx) => {
              return res(ctx.status(500))
            }),
        )

        render(
            <Provider store={store}>
                <Timeline />
            </Provider>
        )

        expect(await screen.findByText('Something went wrong, please review your server connection!')).toBeInTheDocument();
    })
})