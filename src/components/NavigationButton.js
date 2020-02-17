import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme, Button, Box } from '@material-ui/core';
import * as CONSTANTS from '../Constants';

class NavigationButton extends CustomComponent {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    render() {
        const child = React.Children.only(this.props.children);

        return child.type.custom ? (
            <Button onClick={this.clickHandler}>
                <Box minWidth={CONSTANTS.UNIT_INDENT*CONSTANTS.BUTTON_SIZE}>
                    {this.props.label}
                </Box>
            </Button>
        ) : (
            <Button>
                <Box minWidth={CONSTANTS.UNIT_INDENT*CONSTANTS.BUTTON_SIZE}>
                    {React.cloneElement(child, { underline: 'none', color: 'inherit', target: '_blank' }, this.props.label)}
                </Box>
            </Button>
        );
    }

    clickHandler()
    {
        this.props.pageDeque.clear();
        this.props.pageDeque.push(React.Children.only(this.props.children));
        this.props.pageDeque.finish();
    }
}

export default withTheme(NavigationButton);