import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#dd8604',
      dark: '#c77804',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#333333',
      dark: '#222222',
      contrastText: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '4px',
          boxShadow: 'none',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#dd8604',
          textDecoration: 'none',
          '&:hover': {
            color: '#c77804',
          },
        },
      },
    },
  },
});

export default theme; 