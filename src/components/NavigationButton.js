import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Button } from '@material-ui/core';
import { CustomComponent } from '.';
import { PageDequePropType } from './Util';

class NavigationButton extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }

    render()
    {
        return this.props.children.type.custom ? (
            <Button
                onClick={this.clickHandler}
                fullWidth
            >
                {this.props.label}
            </Button>
        ) : React.cloneElement(this.props.children, { fullWidth: true }, this.props.label);
    }

    clickHandler()
    {
        this.props.pageDeque.clear();
        this.props.pageDeque.push(this.props.children);
        this.props.pageDeque.finish();

        window.scrollTo(0, 0);
    }
}

NavigationButton.propTypes = {
    label: PropTypes.string.isRequired,
    pageDeque: PageDequePropType,
    children: PropTypes.element.isRequired
};

export default withTheme(NavigationButton);