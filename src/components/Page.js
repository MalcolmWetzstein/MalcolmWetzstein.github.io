import React from 'react';
import Box from '@material-ui/core/Box';
import { withTheme } from '@material-ui/core/styles';

class Page extends React.Component
{
    render()
    {
        return (
            <Box 
                position="absolute" 
                width={1} 
                minHeight={1} 
                paddingTop={this.props.theme.spacing(1)}
            >
                {this.props.children}
            </Box>
        );
    }
}

export default withTheme(Page);