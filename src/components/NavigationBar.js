import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withTheme } from '@material-ui/core/styles';

class NavigationBar extends React.Component 
{
    constructor(props)
    {
        super(props);

        this.state = {
            currentTab: 0,
            tabNames: []
        }

        this.tabChange = this.tabChange.bind(this);
    }

    componentDidMount()
    {
        this.setState( { tabNames: React.Children.map(this.props.children, child => child.type.buttonText) } );
        this.navigate(this.state.currentTab);
    }

    render()
    {
        return (
           <AppBar>
                <Tabs 
                    indicatorColor="secondary" 
                    value={this.state.currentTab} 
                    onChange={this.tabChange} 
                    centered
                >
                    {React.Children.map(this.props.children, (child, index) => <Tab label={this.state.tabNames[index]}/>)}
                </Tabs>
           </AppBar>
        );
    }

    tabChange(event, tabIndex)
    {
        this.setState( { currentTab: tabIndex } );
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