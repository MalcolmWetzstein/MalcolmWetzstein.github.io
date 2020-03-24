import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Box } from '@material-ui/core';
import { CustomComponent } from '.';

class Center extends CustomComponent
{
    render()
    {
        return (
            <Box
                width={1}
                display='flex'
                justifyContent='center'
            >
                {this.props.children}
            </Box>
        );
    }
}

Center.propTypes = { children: PropTypes.node };

export default withTheme(Center);