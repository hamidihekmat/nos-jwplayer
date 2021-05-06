import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/*Fonts */
@font-face {
  font-family: 'Netflix Sans';
  font-weight: 100;
  src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff2)
      format('woff2'),
    url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff)
      format('woff');
}
@font-face {
  font-family: 'Netflix Sans';
  font-weight: 300;
  src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff2)
      format('woff2'),
    url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff)
      format('woff');
}
@font-face {
  font-family: 'Netflix Sans';
  font-weight: 400;
  src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff2)
      format('woff2'),
    url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff)
      format('woff');
}
@font-face {
  font-family: 'Netflix Sans';
  font-weight: 700;
  src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff2)
      format('woff2'),
    url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff)
      format('woff');
}
@font-face {
  font-family: 'Netflix Sans';
  font-weight: 800;
  src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff2)
      format('woff2'),
    url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff)
      format('woff');
}
@font-face {
  font-family: 'Netflix Sans';
  font-weight: 900;
  src: url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff2)
      format('woff2'),
    url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff)
      format('woff');
}


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
