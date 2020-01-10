import React from 'react';
import CustomComponent from './CustomComponent';
import { Tabs, Tab, withTheme, AppBar, Box, IconButton } from '@material-ui/core';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

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
                <AppBar position='static'>
                    <Tabs
                        indicatorColor='secondary'
                        value={this.state.currentTab} 
                        onChange={this.tabChange}
                        variant='scrollable'
                        scrollButtons='auto'
                    >
                        {React.Children.map(this.props.children, (child, index) => <Tab label={this.props.labels[index]}/>)}
                    </Tabs>
                </AppBar>
                {React.Children.toArray(this.props.children)[this.state.currentTab]}
                <Box>
                    <IconButton>
                        <NavigateBeforeIcon/>
                    </IconButton>
                    <IconButton>
                        <NavigateNextIcon/>
                    </IconButton>
                </Box>
            </React.Fragment>
        );
    }

    tabChange(event, tabIndex)
    {
        this.setState({ currentTab: tabIndex });
    }
}

export default withTheme(Categories);