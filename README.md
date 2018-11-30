# Moonpig Frontend Challenge

Demo can be viewed here: [live demo](http://moonpig-fe-fun.s3-website.eu-west-2.amazonaws.com/)

## Notes

+ Trying to fetch from the endpoint specified in task gives a CORB error - the data here is mocked from a cURL call
+ https would be nice - but the free S3 bucket the demo is hosted on won't allow it without a domain name purchase for CloudFront to use. Same for gzipping content
+ Cards can be viewed either in a Modal format, or directly via the card url (opens single page)
+ A CDN for the images (which optimised and serves up different sizes based on responsive widths) would improve things
+ React Transition Group seems to want to transition everything all of the time (a little annoying)



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](https://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run e2e`

Launches a command line version of Cypress end-to-end testing.<br>
(Note: Make sure you've run `yarn start` first.)<br>

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Uses

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [StyledComponents](https://www.styled-components.com/)
- [React Transition Group](https://reactcommunity.org/react-transition-group/)
- [Jest](https://jestjs.io/en/)
- [Enzyme](https://airbnb.io/enzyme/)
- [Cypress](https://www.cypress.io/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
