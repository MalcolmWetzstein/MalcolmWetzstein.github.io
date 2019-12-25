import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const DarkTheme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'dark'
        }
    })
);