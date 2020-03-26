import React from 'react';
import PropTypes from 'prop-types';
import { Box, withTheme } from '@material-ui/core';
import { CustomComponent } from '.';
import * as CONSTANTS from '../Constants';

class Space extends CustomComponent
{
    render()
    {
        return (
            <Box padding={this.padding()}/>
        );
    }

    padding()
    {
        const size = CONSTANTS.SPACE_SIZES[this.props.size];
        return this.props.theme.spacing(size, 0, size, 0);
    }
}

Space.defaultProps = { size: CONSTANTS.DEFAULT_SPACE };

Space.propTypes = {
    theme: PropTypes.object.isRequired,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    children: PropTypes.oneOf([undefined, null])
};

export default withTheme(Space);