import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/*Fonts */


html,
body {
  background: #000000;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
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

`;
