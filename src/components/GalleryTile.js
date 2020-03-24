import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core';
import { CustomComponent, Image } from '.';

class GalleryTile extends CustomComponent {
    render() {
        return (
            <React.Fragment>
                <Image
                    src={this.props.image}
                    alt={this.props.label ? this.props.label : ''}
                    height={1}
                />
            </React.Fragment>
        );
    }
}

export default withTheme(GalleryTile);