import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Box } from '@material-ui/core';

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