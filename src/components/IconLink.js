import React from 'react';
import CustomComponent from './CustomComponent';
import { IconButton, withTheme } from '@material-ui/core';

class IconLink extends CustomComponent
{
    render()
    {
        return (
            <IconButton
                href={this.props.href}
                target='_blank'
            >
                {React.Children.only(this.props.children)}
            </IconButton>
        );
    }
}

export default withTheme(IconLink);