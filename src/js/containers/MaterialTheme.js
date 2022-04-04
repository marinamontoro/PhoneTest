import green from '@material-ui/core/colors/green'
import { createTheme } from '@material-ui/core/styles'

export default createTheme({
  typography: {
    useNextVariants: true,
    fontFamily: "Heebo, 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  inputFormat: {
    backgroundColor: '#1C2C4B',
    color: '#FFFFFF',
  },

    primary: {
      light: '#EF9A9A',
      main: '#121A27',
      dark: '#C62828',
      hovered: '#496d90',
      contrastText: '#fff',
      secondaryText: '#889098',
      softBackground: '#283E60',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    background: {
      default: '#121A27',
      secondary: '#1C2C4B',
    },
    success: {
      dark: '#43a047',
    },
    transactionButtons: {
      buy: {
        backgroundColor: green[500],
        hoverColor: green[700],
      },
      sell: {
        backgroundColor: '#df2230',
        hoverColor: '#b2102f',
      },
      cancel: {
        backgroundColor: '#1c2c4b',
        hoverColor: '#496d90',
      },

  },
  overrides: {
    MuiSelect: {
      select: {
        paddingLeft: '10px',
        paddingRight: '24px',
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        border: 'none',
      },
    },
  },
})
