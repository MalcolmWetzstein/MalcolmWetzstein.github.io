import React from 'react';
import { Button } from '@material-ui/core';

export default class NavigationButton extends React.Component 
{
    constructor(props)
    {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render() 
    {
        return (
            <Button onClick={this.onClick}>
                { this.props.children }
            </Button>
        );
    }

    onClick()
    {
        if (this.props.clear) 
            this.props.pageDeque.clear();
        if (this.props.page)
            this.props.pageDeque.push(this.props.page);
    }
}