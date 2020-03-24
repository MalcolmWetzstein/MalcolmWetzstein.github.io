import React from 'react';
import PropTypes from 'prop-types';
import { Box, withTheme } from '@material-ui/core';
import { CustomComponent } from '.';
import * as CONSTANTS from '../Constants';

class Indent extends CustomComponent
{
    render()
    {
        return (
            <Box margin={this.props.theme.spacing(0, 0, 0, this.props.level ? this.props.level * CONSTANTS.UNIT_INDENT : CONSTANTS.UNIT_INDENT)}>
                {React.Children.map(this.props.children, child => this.passDequeProps(child))}
            </Box>
        );
    }

    passDequeProps(child)
    {
        return this.props.pageDeque ? this.props.pageDeque.withDequeProps(child) : child;
    }
}

export default withTheme(Indent);