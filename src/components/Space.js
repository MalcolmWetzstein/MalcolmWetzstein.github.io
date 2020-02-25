import React from 'react';
import CustomComponent from './CustomComponent';
import { Box, withTheme } from '@material-ui/core';
import * as CONSTANTS from '../Constants';

const DEFAULT_SIZE = 'md';

class Space extends CustomComponent {
    render() {
        return (
            <Box padding={this.padding()}/>
        );
    }

    padding() {
        const size = CONSTANTS.SPACE_SIZES[this.props.size ? this.props.size : DEFAULT_SIZE];
        return this.props.theme.spacing(size, 0, size, 0);
    }
}

export default withTheme(Space);