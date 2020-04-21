import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core';
import { CustomComponent } from '.';
import { NoChildrenPropType } from './Util';
import * as CONSTANTS from '../Constants';

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
                style={{ objectFit: this.props.objectFit }}
                onLoad={this.props.onLoad}
                onClick={this.props.onClick}
            />
        );
    }
}

Image.defaultProps = {
    alt: '',
    objectFit: CONSTANTS.IMAGE_DEFAULT_OBJECT_FIT
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    objectFit: PropTypes.oneOf(['fill', 'contain', 'cover', 'scale-down', 'none']),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onLoad: PropTypes.func,
    onClick: PropTypes.func,
    children: NoChildrenPropType
};

export default withTheme(Image);