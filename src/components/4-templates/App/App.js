import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import WebFont from 'webfontloader';
import { createBrowserHistory } from 'history';
import { Route } from 'react-router-dom';
import GATracker from '../../../utils/helpers/GATracker';
import theme from '../../../theme/theme';
import Routes from '../Routes/Routes';
import Header from '../../2-molecules/Header/Header';
import AppStyled from './App.styled';

WebFont.load({
  google: {
    families: ['Poppins'],
  },
});

const history = createBrowserHistory();

const GlobalStyle = createGlobalStyle`
  body {
    color: #505050;
    margin: 0;
    min-height: 100vh;
    overflow-y: scroll;
    padding: 0;
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: #ee447d;
    text-decoration: none;
  }

  a:hover {
    color: #ffa2c1;
    text-decoration: underline;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const App = () => (
  <ConnectedRouter history={history}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <AppStyled>
          <Header />
          <Route path="/" component={GATracker(Routes)} />
        </AppStyled>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  </ConnectedRouter>
);

export default App;
