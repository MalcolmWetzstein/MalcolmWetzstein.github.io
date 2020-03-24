import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, GridList, GridListTile } from '@material-ui/core';
import { CustomComponent } from '.';
import * as CONSTANTS from '../Constants';

class Gallery extends CustomComponent {
    render() {
        return (
            <GridList
                cols={CONSTANTS.MAX_GRID_LIST_COLUMNS}
                cellHeight='auto'
            >
                {
                    React.Children.map(this.props.children,
                        child => 
                            <GridListTile>
                                {child}
                            </GridListTile>
                    )
                }
            </GridList>
        );
    }
}

export default withTheme(Gallery);