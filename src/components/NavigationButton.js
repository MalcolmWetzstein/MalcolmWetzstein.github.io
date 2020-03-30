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
        return (
            <Button
                fullWidth
                onClick={this.clickHandler}
                href={this.props.href}
                target='_blank'
            >
                {this.props.label}
            </Button>
        );
    }

    clickHandler()
    {
        if (this.props.children)
        {
            this.props.pageDeque.clear();
            this.props.pageDeque.push(this.props.children);
            this.props.pageDeque.finish();

            window.scrollTo(0, 0);
        }
    }
}

NavigationButton.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    pageDeque: PageDequePropType,
    children: PropTypes.element.isRequired
};

export default withTheme(NavigationButton);