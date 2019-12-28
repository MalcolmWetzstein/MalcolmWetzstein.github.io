import React from 'react';
import CustomComponent from './CustomComponent';
import { Box, withTheme } from '@material-ui/core';

class Page extends CustomComponent
{
    render()
    {
        return (
            <Box 
                position="absolute" 
                width={1} 
                minHeight={1} 
                padding={this.props.theme.spacing(6, 0, 6, 0)}
            >
                {React.Children.map(this.props.children, child => this.props.pageDeque.withDequeProps(child))}
            </Box>
        );
    }
}

export default withTheme(Page);