import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme, GridListTileBar, ButtonBase } from '@material-ui/core';

class ShowcaseTile extends CustomComponent {
    constructor(props) {
        super(props);

        this.onOpen = this.onOpen.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <ButtonBase style={{ width: '100%', height: '100%'}} onClick={this.onOpen}>
                    <img src={this.props.image} alt={this.props.label} width='100%' height='100%'/>
                </ButtonBase>
                <GridListTileBar title={this.props.label}/>
            </React.Fragment>
        );
    }

    onOpen() {
        this.props.pageDeque.push(this.props.children);
        this.props.pageDeque.finish();
    }
}

export default withTheme(ShowcaseTile);