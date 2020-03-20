import React from 'react';
import { withTheme } from '@material-ui/core';
import { CustomComponent } from '.';

class GalleryTile extends CustomComponent {
    render() {
        return (
            <React.Fragment>
                <img
                    src={this.props.image}
                    alt={this.props.label ? this.props.label : ''}
                    width='100%'
                    height='100%'
                />
            </React.Fragment>
        );
    }
}

export default withTheme(GalleryTile);