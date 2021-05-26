import '../styles/font.css';
import { GlobalStyle } from '../styles/global';
import styled from '@emotion/styled';
import Menu from '../components/Menu';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          function (registration) {
            console.log(
              'Service Worker registration successful with scope: ',
              registration.scope
            );
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Menu />
        <Component {...pageProps} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default MyApp;
