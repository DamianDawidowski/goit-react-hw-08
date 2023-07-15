import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#03bafc',
        color: '#522d21',
      },
    },
  },
  colors: {
    brand: {
      main: '#522d21',
      light: '#f6d7c7',
      yellow: '#eec54b',
    },
  },
  components: {
    Button: { 
      defaultProps: {
        variant: 'ghost',
      }, 
      sizes: {
        md: {
          fontSize: '26px',
          fontWeight: '500',
          px: 4,
          py: 7,
        },
      },
    },
  },
});

export default theme;