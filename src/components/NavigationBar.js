import React from 'react';
import AppBar from '@material-ui/core/AppBar';

export default class NavigationBar extends React.Component 
{
    render() 
    {
        return (
            <AppBar>
                { React.Children.map(this.props.children, child => this.props.pageDeque.withDequeProps(child)) }
            </AppBar>
        );
    }
}