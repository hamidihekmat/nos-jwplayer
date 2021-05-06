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
        .scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0);
          border-radius: 16px;
          border: 5px solid #fff;
        }

        .scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: #a0a0a5;
        }

        .scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #a0a0a5;
          border: 4px solid #f4f4f4;
        }
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
