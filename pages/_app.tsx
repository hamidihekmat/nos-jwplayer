import '../styles/font.css';
import { GlobalStyle } from '../styles/global';
import styled from '@emotion/styled';
import Menu from '../components/Menu';

function MyApp({ Component, pageProps }) {
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
