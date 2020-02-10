import React from 'react';
import CustomComponent from './CustomComponent';
import { Tabs, withTheme, Box, IconButton } from '@material-ui/core';
import { CustomTab, OptionalWrapper } from './Custom';

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
        this.next = this.next.bind(this);
        this.back = this.back.bind(this);
    }

    render()
    {
        return (
            <React.Fragment>
                <OptionalWrapper wrapper={<Box display='flex' justifyContent='center'/>} condition={!this.props.sparse}>
                    <Tabs
                        indicatorColor='secondary'
                        value={this.state.currentTab} 
                        onChange={this.tabChange}
                        variant={this.props.sparse ? 'fullWidth' : 'scrollable'}
                        scrollButtons='auto'
                    >
                        {React.Children.map(this.props.children, (child, index) => <CustomTab sparse={this.props.sparse} label={this.props.labels[index]}/>)}
                    </Tabs>
                </OptionalWrapper>
                {React.Children.toArray(this.props.children)[this.state.currentTab]}
                <Box display='flex' width={1} margin={this.props.theme.spacing(1, 0, 0, 0)} justifyContent='center'>
                    <IconButton onClick={this.back} disabled={this.state.currentTab === 0}>
                        <NavigateBeforeIcon/>
                    </IconButton>
                    <IconButton onClick={this.next} disabled={this.state.currentTab === React.Children.count(this.props.children)-1}>
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

    next()
    {
        this.setState({ currentTab: Math.min(this.state.currentTab+1, React.Children.count(this.props.children)-1) });
    }

    back()
    {
        this.setState({ currentTab: Math.max(this.state.currentTab-1, 0) });
    }
}

export default withTheme(Categories);