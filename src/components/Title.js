import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme, Typography, Divider, Box } from '@material-ui/core';
import * as CONSTANTS from '../Constants';
import { Space } from './Custom';

class Title extends CustomComponent
{
    render()
    {
        return (
            <React.Fragment>
                <Box>
                    <Typography component='h1' variant={CONSTANTS.TITLE_VARIANT} align='center'>
                        {this.props.children}
                    </Typography>
                    <Space size='sm'/>
                    <Divider/>
                </Box>
            </React.Fragment>
        );
    }
}

export default withTheme(Title);