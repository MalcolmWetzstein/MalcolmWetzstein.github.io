import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme, GridList, GridListTile } from '@material-ui/core';
import * as CONSTANTS from '../Constants';

class Showcase extends CustomComponent {
    render() {
        return (
            <GridList cols={3} cellHeight='auto' spacing={this.props.theme.spacing(CONSTANTS.SPACE_SIZES['sm'])}>
                {React.Children.map(this.props.children, child => <GridListTile>{this.props.pageDeque.withDequeProps(child)}</GridListTile>)}
            </GridList>
        );
    }
}

export default withTheme(Showcase);