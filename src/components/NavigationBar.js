import React from 'react';
import CustomComponent from './CustomComponent';
import { AppBar, Tabs, Tab, withTheme, Box, Divider, Grid } from '@material-ui/core';
import { reKey } from './Util';

class NavigationBar extends CustomComponent 
{
    constructor(props)
    {
        super(props);

        this.state = {
            tabNames: []
        }

        this.tabChange = this.tabChange.bind(this);
    }

    componentDidMount()
    {
        this.setState( { tabNames: React.Children.map(this.props.children, child => child.type.buttonText) } );
        this.navigate(0);
    }

    render()
    {
        return (
           <AppBar>
                <Grid container direction='row' justify='space-between' wrap='nowrap'>
                    <Grid item zeroMinWidth>
                        <Tabs 
                            indicatorColor="secondary" 
                            value={this.state.tabNames.length > 0 ? this.state.tabNames.indexOf(this.props.pageDeque.bottom().type.buttonText) : 0} 
                            onChange={this.tabChange}
                            variant='scrollable'
                            scrollButtons='auto'
                        >
                            {React.Children.map(this.props.children, (child, index) => <Tab label={this.state.tabNames[index]}/>)}
                        </Tabs>
                    </Grid>
                    <Grid item>
                        <Box display='flex' height={1}>
                            <Divider orientation='vertical'/>
                            <Box display='flex' height={1} margin={this.props.theme.spacing(0, 1, 0, 1)}>
                                {reKey(this.props.links)}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
           </AppBar>
        );
    }

    tabChange(event, tabIndex)
    {
        this.navigate(tabIndex);
    }

    navigate(tabIndex)
    {
        this.props.pageDeque.clear();
        this.props.pageDeque.push(this.props.pageDeque.withDequeProps(React.Children.toArray(this.props.children)[tabIndex]));
        this.props.pageDeque.finish();

        window.scrollTo(0, 0);
    }
}

export default withTheme(NavigationBar);