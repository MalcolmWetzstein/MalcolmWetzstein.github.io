import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const MainTheme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'dark'
        }
    })
);