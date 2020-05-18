import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, ListItem, ListItemIcon, ListItemText, Link } from '@material-ui/core';
import { CustomComponent } from '.';
import { NoChildrenPropType } from './Util';

class ContactMethod extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.linkRef = React.createRef();

        this.onClick = this.onClick.bind(this);
    }

    render()
    {
        return (
            <ListItem
                onClick={this.onClick}
                style={{ cursor: 'pointer' }}
            >
                <ListItemIcon>
                    {this.props.icon}
                </ListItemIcon>
                <ListItemText
                    primary={this.props.label}
                    secondary={
                        <Link
                            href={this.props.contactHref}
                            target='_blank'
                            color='inherit'
                            ref={this.linkRef}
                        >
                            {this.props.contactDisplay}
                        </Link>
                    }
                />
            </ListItem>
        );
    }

    onClick()
    {
        if (this.linkRef.current)
            this.linkRef.current.click();
    }
}

ContactMethod.propTypes = {
    icon: PropTypes.node.isRequired,
    contactHref: PropTypes.string.isRequired,
    contactDisplay: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: NoChildrenPropType
};

export default withTheme(ContactMethod);