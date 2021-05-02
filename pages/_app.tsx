import '../styles/globals.css';
import '../styles/Player.css';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { theme } from '../styles/global';
// Components
import Menu from '../components/Menu';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box display="flex" flexDirection="row" margin="0px">
        <Menu />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
