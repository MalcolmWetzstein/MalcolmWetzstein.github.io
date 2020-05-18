import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Grid } from '@material-ui/core';
import { CustomComponent } from '.';
import { PageDequePropType, ZeroOrMoreElementsPropType } from './Util';
import * as CONSTANTS from '../Constants';

class Showcase extends CustomComponent
{
    render()
    {
        return (
            <Grid
                container
                spacing={CONSTANTS.SHOWCASE_SPACING}
            >
                {
                    React.Children.map(this.props.children, child =>
                        <Grid
                            item
                            xs={CONSTANTS.SHOWCASE_GRID_SIZES['xs']}
                            sm={CONSTANTS.SHOWCASE_GRID_SIZES['sm']}
                            md={CONSTANTS.SHOWCASE_GRID_SIZES['md']}
                        >
                            {this.props.pageDeque.withDequeProps(child)}
                        </Grid>
                    )
                }
            </Grid>
        );
    }
}

Showcase.propTypes = {
    theme: PropTypes.object.isRequired,
    pageDeque: PageDequePropType.isRequired,
    children: ZeroOrMoreElementsPropType
};

export default withTheme(Showcase);