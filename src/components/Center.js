import React from 'react';
import { withTheme, Box } from '@material-ui/core';
import { CustomComponent } from '.';

class Center extends CustomComponent {
    render() {
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

export default withTheme(Center);