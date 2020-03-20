import React from 'react';
import { withTheme, GridList, GridListTile } from '@material-ui/core';
import { CustomComponent } from '.';
import * as CONSTANTS from '../Constants';

class Showcase extends CustomComponent
{
    render()
    {
        return (
            <GridList
                cols={CONSTANTS.MAX_GRID_LIST_COLUMNS}
                cellHeight='auto'
                spacing={this.props.theme.spacing(CONSTANTS.SPACE_SIZES['sm'])}
            >
                {
                    React.Children.map(this.props.children,
                        child =>
                            <GridListTile>
                                {this.props.pageDeque.withDequeProps(child)}
                            </GridListTile>
                    )
                }
            </GridList>
        );
    }
}

export default withTheme(Showcase);