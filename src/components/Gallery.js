import React from 'react'
import CustomComponent from './CustomComponent';
import { withTheme, GridList, GridListTile } from '@material-ui/core';

class Gallery extends CustomComponent {
    render() {
        return (
            <GridList cols={3} cellHeight='auto'>
                {React.Children.map(this.props.children, child => <GridListTile>{child}</GridListTile>)}
            </GridList>
        );
    }
}

export default withTheme(Gallery);