import React from 'react';
import CustomComponent from './CustomComponent';
import { Tabs, withTheme, Box, IconButton, Paper } from '@material-ui/core';
import { CustomTab, OptionalWrapper } from './Custom';
import * as CONSTANTS from '../Constants';

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

        this.ref = React.createRef();

        this.tabChange = this.tabChange.bind(this);
        this.next = this.next.bind(this);
        this.back = this.back.bind(this);
    }

    render()
    {
        return (
            <React.Fragment>
                <Paper square>
                    <OptionalWrapper wrapper={<Box display='flex' justifyContent='center'/>} condition={!this.props.sparse}>
                        <Tabs
                            indicatorColor='secondary'
                            value={this.state.currentTab} 
                            onChange={this.tabChange}
                            variant={this.props.sparse ? 'fullWidth' : 'scrollable'}
                            scrollButtons='auto'
                            ref={this.ref}
                        >
                            {React.Children.map(this.props.children, (child, index) => <CustomTab sparse={this.props.sparse} label={this.props.labels[index]}/>)}
                        </Tabs>
                    </OptionalWrapper>
                </Paper>
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
        this.scrollToTabs();
    }

    back()
    {
        this.setState({ currentTab: Math.max(this.state.currentTab-1, 0) });
        this.scrollToTabs();
    }

    scrollToTabs() {
        this.ref.current.scrollIntoView(true);
        window.scrollBy(0, -this.props.theme.spacing(CONSTANTS.UNIT_SPACE));
    }
}

export default withTheme(Categories);