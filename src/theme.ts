import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        unstyled: {
          fontFamily: 'Barlow',
          fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
          color: 'white',
        },
        contact: {
          fontFamily: 'Franceus',
          textTransform: 'uppercase',
          fontSize: { base: 'lg', md: 'lg', lg: 'xl' },
          bg: 'white',
          color: 'black',
          p: { base: 4, md: 6, lg: 8 },
          borderRadius: 999,
        },
      },
    },
  },
  textStyles: {
    h1: {
      fontFamily: 'Fraunces',
      fontSize: { base: '4xl', sm: '5xl', md: '6xl', lg: '7xl' },
      fontWeight: 'bold',
      lineHeight: 1,
      textTransform: 'uppercase',
      color: 'white',
      letterSpacing: 8,
    },
    h2: {
      fontFamily: 'Fraunces',
      fontSize: { base: '3xl', md: '4xl', lg: '5xl' },
      fontWeight: 'bold',
      lineHeight: 1,
    },
    h3: {
      fontFamily: 'Fraunces',
      fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
      fontWeight: 'bold',
      lineHeight: 1,
    },
    h4: {
      fontSize: { base: 'lg', md: 'xl' },
      color: 'gray.600',
      fontWeight: 'semibold',
    },
    h5: {
      fontSize: { base: 'md', md: 'lg' },
      color: 'gray.600',
      fontWeight: 'semibold',
    },
    p: {
      fontSize: { base: 'md', md: 'lg' },
      color: 'gray.500',
    },
  },
});

export default theme;
