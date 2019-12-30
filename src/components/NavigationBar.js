import React from 'react';
import CustomComponent from './CustomComponent';
import { AppBar, Tabs, Tab, withTheme, Box } from '@material-ui/core';
import { reKey } from './Custom';

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
                <Tabs 
                    indicatorColor="secondary" 
                    value={this.state.tabNames.length > 0 ? this.state.tabNames.indexOf(this.props.pageDeque.bottom().type.buttonText) : 0} 
                    onChange={this.tabChange}
                >
                    {React.Children.map(this.props.children, (child, index) => <Tab label={this.state.tabNames[index]}/>)}
                </Tabs>
                <Box position='absolute' right={0} height={1} display='flex' alignItems='center'>
                    {reKey(this.props.links)}
                </Box>
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
    }
}

export default withTheme(NavigationBar);