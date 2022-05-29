import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.50',
      },
      main: {
        overflow: 'hidden',
        width: '100vw',
        height: '100%',
      },
    },
  },
});

export default theme;
