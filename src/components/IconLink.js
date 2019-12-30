import React from 'react';
import CustomComponent from './CustomComponent';
import { Box, ButtonBase, withTheme } from '@material-ui/core';

class IconLink extends CustomComponent
{
    render()
    {
        return (
            <Box margin={this.props.theme.spacing(0, 1, 0, 1)}>
                <ButtonBase href={this.props.href} target='_blank'>
                    {React.Children.only(this.props.children)}
                </ButtonBase>
            </Box>
        );
    }
}

export default withTheme(IconLink);