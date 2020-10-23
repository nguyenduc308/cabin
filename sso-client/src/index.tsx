import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import store from "store";

import "antd/dist/antd.css";
import "styles/main.scss";
declare global {
  interface Window {
    renderSSO: (containerId: string, data: any) => void;
    unmountSSO: (containerId: string) => void;
  }
}

window.renderSSO = (containerId: string, data) => {
  const root = document.getElementById(containerId);
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Route
          path="/"
          render={(props) => {
            return <App data={data} {...props} />;
          }}
        />
      </BrowserRouter>
    </Provider>,
    root
  );
  serviceWorker.unregister();
};

window.unmountSSO = (containerId: string) => {
  const container: any = document.getElementById(containerId);
  unmountComponentAtNode(container);
};

if (!document.getElementById("SSO")) {
  const root = document.getElementById("root");
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>,
    root
  );
  serviceWorker.unregister();
}
