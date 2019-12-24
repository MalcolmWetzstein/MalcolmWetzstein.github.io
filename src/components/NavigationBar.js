import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import NavigationButton from './NavigationButton';
import Page from './Page';

export default class NavigationBar extends React.Component 
{
    render() 
    {
        return (
            <AppBar>
                <NavigationButton
                    text="Home"
                    page={<Page/>}
                    clear={true}
                    clearPages={this.props.clearPages}
                />
            </AppBar>
        );
    }
}