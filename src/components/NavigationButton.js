import React from 'react';
import { Button } from '@material-ui/core';

export default class NavigationButton extends React.Component 
{
    render() 
    {
        return (
            <Button
                onClick=
                {
                    function () 
                    { 
                        if (this.props.clear) 
                            this.props.pageDeque.clear();
                        //this.props.pushPage(this.props.page); 
                    }.bind(this)
                }
            >
                { this.props.text }
            </Button>
        );
    }
}