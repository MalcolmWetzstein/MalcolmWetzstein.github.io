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
                variant={this.props.variant}
                color={this.props.variant === 'text' ? 'default' : 'secondary'}
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

NavigationButton.defaultProps = { variant: 'text' };

NavigationButton.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
    pageDeque: PageDequePropType,
    children: PropTypes.element
};

export default withTheme(NavigationButton);