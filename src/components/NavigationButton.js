import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme, Button } from '@material-ui/core';

class NavigationButton extends CustomComponent {
    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    render() {
        const child = React.Children.only(this.props.children);

        return child.type.custom ? (
            <Button onClick={this.clickHandler} fullWidth>
                {this.props.label}
            </Button>
        ) : React.cloneElement(child, { fullWidth: true }, this.props.label);
    }

    clickHandler()
    {
        this.props.pageDeque.clear();
        this.props.pageDeque.push(React.Children.only(this.props.children));
        this.props.pageDeque.finish();

        window.scrollTo(0, 0);
    }
}

export default withTheme(NavigationButton);