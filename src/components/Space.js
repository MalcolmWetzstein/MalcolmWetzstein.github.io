import React from 'react';
import PropTypes from 'prop-types';
import { Box, withTheme } from '@material-ui/core';
import { CustomComponent } from '.';
import { NoChildrenPropType } from './Util';
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
    size: PropTypes.oneOf(Object.keys(CONSTANTS.SPACE_SIZES)),
    children: NoChildrenPropType
};

export default withTheme(Space);