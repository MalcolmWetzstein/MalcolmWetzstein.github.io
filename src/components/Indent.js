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
            <Box margin={this.props.theme.spacing(0, 0, 0, this.props.level * CONSTANTS.UNIT_INDENT)}>
                {this.props.children}
            </Box>
        );
    }
}

Indent.defaultProps = { level: 1 };

Indent.propTypes = {
    theme: PropTypes.object.isRequired,
    level: PropTypes.number,
    children: PropTypes.node
};

export default withTheme(Indent);