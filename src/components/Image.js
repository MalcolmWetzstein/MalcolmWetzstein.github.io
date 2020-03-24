import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core';
import { CustomComponent } from '.';

class Image extends CustomComponent
{
    render()
    {
        let width = this.props.width;
        let height = this.props.height;

        if (typeof width === 'number' && width <= 1)
            width = (width * 100) + '%';
        if (typeof height === 'number' && height <= 1)
            height = (width * 100) + '%';

        return (
            <img
                src={this.props.src}
                alt={this.props.alt}
                width={width}
                height={height}
                style={{ objectFit: this.props.objectFit ? this.props.objectFit : 'contain' }}
                onLoad={this.props.onLoad}
            />
        );
    }
}

export default withTheme(Image);