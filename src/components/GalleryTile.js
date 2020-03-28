import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core';
import { CustomComponent, Image } from '.';
import { NoChildrenPropType } from './Util';

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
    children: NoChildrenPropType
};

export default withTheme(GalleryTile);