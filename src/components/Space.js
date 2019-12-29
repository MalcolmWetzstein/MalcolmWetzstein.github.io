import React from 'react';
import CustomComponent from './CustomComponent';
import { Box, withTheme } from '@material-ui/core';
import * as CONSTANTS from '../Constants';

class Space extends CustomComponent
{
    render()
    {
        return (
            <Box margin={this.props.theme.spacing(this.props.level ? this.props.level * CONSTANTS.UNIT_SPACE : CONSTANTS.UNIT_SPACE, 0, 0, 0)}>
                {React.Children.map(this.props.children, child => this.props.pageDeque.withDequeProps(child))}
            </Box>
        );
    }
}

export default withTheme(Space);