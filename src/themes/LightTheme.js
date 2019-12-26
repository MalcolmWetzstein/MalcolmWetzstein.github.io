import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const LightTheme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'light'
        }
    })
);