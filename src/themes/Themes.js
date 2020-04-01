import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import teal from '@material-ui/core/colors/teal';
import blueGrey from '@material-ui/core/colors/blueGrey';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';

const Indigo = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'dark',
            primary: { main: indigo[800] },
            secondary: { main: orange[300] }
        }
    })
);

const Teal = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'dark',
            primary: { main: teal[900] },
            secondary: { main: amber[400] }
        }
    })
);

const BlueGrey = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'dark',
            primary: { main: blueGrey[800] },
            secondary: { main: amber[500] }
        }
    })
);

export default { Indigo, Teal, BlueGrey };