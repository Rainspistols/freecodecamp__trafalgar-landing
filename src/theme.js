import React from 'react';
import { ThemeProvider } from 'emotion-theming';
// images
import dots2 from './images/dots2.png';

const theme = {
  mediaTablet: '@media(min-width: 768px)',
  mediaDesktop: '@media(min-width: 1280px)',

  flex: {
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    between: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },

  colors: {
    blue: '#458FF6',
    darkBlue: '#233348',
    white: 'white',
    black: 'black',
  },

  styles: {
    dots: {
      position: 'absolute',
      backgroundImage: `url(${dots2})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: 132,
      height: 115,
    },
  },

  font: {
    light: {
      fontWeight: 300,
      fontStyle: 'normal',
    },
    regular: {
      fontWeight: 400,
      fontStyle: 'normal',
    },
    bold: {
      fontWeight: 700,
      fontStyle: 'normal',
    },
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
