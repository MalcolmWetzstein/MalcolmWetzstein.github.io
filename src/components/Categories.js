import React from 'react';
import CustomComponent from './CustomComponent';
import { AppBar, Tabs, Tab, withTheme, Box, Divider, Grid } from '@material-ui/core';
import { reKey } from './Util';

class Categories extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            currentTab: 0
        }

        this.tabChange = this.tabChange.bind(this);
    }

    render()
    {
        return (
            <Tabs
                indicatorColor='secondary'
                value={this.state.currentTab} 
                onChange={this.tabChange}
                variant='scrollable'
                scrollButtons='auto'
            >
                {React.Children.map(this.props.children, (child, index) => <Tab label={this.props.labels[index]}/>)}
            </Tabs>
        );
    }

    tabChange(event, tabIndex)
    {
        this.setState({ currentTab: 0 });
    }
}

export default withTheme(Categories);