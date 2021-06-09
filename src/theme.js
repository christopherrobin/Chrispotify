import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import './variables.scss';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1DB954',
      contrastText: '#fff'
    },
    secondary: {
      main: '#195a85',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#195a85',
    },
  },
});

export default theme;