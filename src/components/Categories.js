import React from 'react';
import CustomComponent from './CustomComponent';
import { Tabs, Tab, withTheme } from '@material-ui/core';

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
            <React.Fragment>
                <Tabs
                    indicatorColor='secondary'
                    value={this.state.currentTab} 
                    onChange={this.tabChange}
                    variant='scrollable'
                    scrollButtons='auto'
                >
                    {React.Children.map(this.props.children, (child, index) => <Tab label={this.props.labels[index]}/>)}
                </Tabs>
                {React.Children.toArray(this.props.children)[this.state.currentTab]}
            </React.Fragment>
        );
    }

    tabChange(event, tabIndex)
    {
        this.setState({ currentTab: tabIndex });
    }
}

export default withTheme(Categories);