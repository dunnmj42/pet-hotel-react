import { createMuiTheme } from '@material-ui/core';

const MuiTheme = createMuiTheme({
  typography: {
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 500,
    h2: {
      fontFamily: 'Noto Serif',
      fontWeight: 200,
    },
    h3: {
      fontFamily: 'Noto Serif',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'Noto Serif',
      fontWeight: 400,
    },
    h5: {
      fontFamily: 'Noto Serif',
      fontWeight: 400,
      fontSize: '1.4em',
    },
    h6: {
      fontFamily: 'Noto Serif',
      fontWeight: 400,
      fontSize: '1.1em',
    },
    button: {
      fontFamily: 'Noto Serif',
      textTransform: 'none',
    },
  },
});

export default MuiTheme;
