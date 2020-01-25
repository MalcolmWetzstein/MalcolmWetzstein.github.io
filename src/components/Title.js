import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme, Typography } from '@material-ui/core';
import * as CONSTANTS from '../Constants';

class Title extends CustomComponent
{
    render()
    {
        return (
            <Typography variant={CONSTANTS.TITLE_VARIANT} align='center'>
                {this.props.children}
            </Typography>
        );
    }
}

export default withTheme(Title);