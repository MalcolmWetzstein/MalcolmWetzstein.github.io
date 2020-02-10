import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme, GridList, GridListTile } from '@material-ui/core';

class Showcase extends CustomComponent {
    render() {
        return (
            <GridList cols={3} cellHeight='auto' spacing={this.props.theme.spacing(4)}>
                {React.Children.map(this.props.children, child => <GridListTile>{this.props.pageDeque.withDequeProps(child)}</GridListTile>)}
            </GridList>
        );
    }
}

export default withTheme(Showcase);