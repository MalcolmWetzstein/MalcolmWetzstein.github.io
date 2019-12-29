import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme } from '@material-ui/core';

class Group extends CustomComponent
{
    render()
    {
        return React.Children.map(this.props.children, child => this.props.pageDeque.withDequeProps(child));
    }
}

export default withTheme(Group);