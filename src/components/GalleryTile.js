import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core';
import { CustomComponent, Image } from '.';

class GalleryTile extends CustomComponent
{
    render()
    {
        return (
            <React.Fragment>
                <Image
                    src={this.props.image}
                    alt={this.props.label}
                    height={1}
                />
            </React.Fragment>
        );
    }
}

GalleryTile.defaultProps = { label: '' };

GalleryTile.propTypes = {
    image: PropTypes.string.isRequired,
    label: PropTypes.string,
    children: PropTypes.oneOf([undefined, null])
};

export default withTheme(GalleryTile);