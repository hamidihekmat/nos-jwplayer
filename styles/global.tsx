import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '375px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
});

export const theme = extendTheme({
  breakpoints,
  global: {
    'html, body': {
      background: '#00000',
      '-webkit-font-smoothing': 'antialiased',
    },
  },
  components: {},
});
