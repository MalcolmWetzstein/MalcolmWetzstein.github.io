import React from 'react';
import PropTypes from 'prop-types';
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

Showcase.propTypes = {
    theme: PropTypes.object.isRequired,
    pageDeque: PropTypes.shape({
        push: PropTypes.func.isRequired,
        unshift: PropTypes.func.isRequired,
        insert: PropTypes.func.isRequired,
        pop: PropTypes.func.isRequired,
        shift: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired,
        clear: PropTypes.func.isRequired,
        top: PropTypes.func.isRequired,
        bottom: PropTypes.func.isRequired,
        pageAt: PropTypes.func.isRequired,
        swapTop: PropTypes.func.isRequired,
        swapBottom: PropTypes.func.isRequired,
        swapAt: PropTypes.func.isRequired,
        finish: PropTypes.func.isRequired,
        withDequeProps: PropTypes.func.isRequired
    }).isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
};

export default withTheme(Showcase);