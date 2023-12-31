import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

if (
    !process.env.REACT_APP_AUTH0_DOMAIN ||
    !process.env.REACT_APP_AUTH0_CLIENT_ID ||
    !process.env.REACT_APP_AUTH0_CALLBACK_URL
) {
    throw new Error("One or more required environment variables are missing.");
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Auth0Provider
              domain={process.env.REACT_APP_AUTH0_DOMAIN}
              clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
              authorizationParams={{
                  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
                  redirect_uri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
              }}
              >
              <App />
          </Auth0Provider>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
