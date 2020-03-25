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
                {this.props.children}
            </IconButton>
        );
    }
}

IconLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
};

export default withTheme(IconLink);