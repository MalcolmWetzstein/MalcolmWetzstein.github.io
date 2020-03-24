import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, withTheme } from '@material-ui/core';
import { CustomComponent } from '.';

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