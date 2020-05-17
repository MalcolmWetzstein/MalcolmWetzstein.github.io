import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Button, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { CustomComponent, ConditionalRender } from '.';
import { PageDequePropType } from './Util';

class NavigationButton extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render()
    {
        return this.props.listItem ? (
            <ListItem
                button
                onClick={this.onClick}
                href={this.props.href}
                target='_blank'
            >
                <ConditionalRender condition={this.props.icon}>
                    <ListItemIcon>
                        {this.props.icon}
                    </ListItemIcon>
                </ConditionalRender>
                <ListItemText>
                    {this.props.label}
                </ListItemText>
            </ListItem>
        ) : (
            <Button
                fullWidth
                onClick={this.onClick}
                href={this.props.href}
                target='_blank'
                variant={this.props.variant}
                color={this.props.variant === 'text' ? 'default' : 'secondary'}
                startIcon={this.props.icon}
            >
                {this.props.label}
            </Button>
        );
    }

    onClick()
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
    listItem: PropTypes.bool,
    icon: PropTypes.node,
    pageDeque: PageDequePropType,
    children: PropTypes.element
};

export default withTheme(NavigationButton);