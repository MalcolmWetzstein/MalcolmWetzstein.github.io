import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const Blue = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'light',
            // primary: { main: deepOrange[900] },
            // secondary: { main: amber[200] }
        }
    })
);

export default { Blue };