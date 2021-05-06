import { Global, css } from '@emotion/react';

export const GlobalStyle = (props) => (
  <Global
    {...props}
    styles={css`
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: #000000;

        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
      }
      body::-webkit-scrollbar {
        width: 0.5em;
      }

      body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      body::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border-radius: 16px;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #ffffff;
      }
    `}
  />
);
