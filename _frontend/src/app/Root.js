import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "styled-components";
import configureStore, { history } from "./state/configureStore";
import routes from "./routes";

import Layout from "./components/Layout";
import theme from "$shared/styles/theme";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <Layout>{routes}</Layout>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>
);

export default Root;
