import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, withTheme, Box, Grid } from '@material-ui/core';
import { CustomComponent, CustomTab } from '.';
import { reKey, PageDequePropType, OneOrMoreElementsPropType } from './Util';
import * as CONSTANTS from '../Constants';

class NavigationBar extends CustomComponent 
{
    constructor(props)
    {
        super(props);

        this.state = { tabNames: [] }

        this.tabChange = this.tabChange.bind(this);
    }

    componentDidMount()
    {
        this.setState( { tabNames: React.Children.map(this.props.children, child => child.type.displayText) } );
        this.navigate(0);
    }

    render()
    {
        return (
           <AppBar position='static'>
                <Grid
                    container
                    direction='row'
                    justify='space-between'
                    wrap='nowrap'
                >
                    <Grid
                        item
                        zeroMinWidth
                    >
                        <Tabs 
                            indicatorColor='secondary' 
                            value={this.state.tabNames.length > 0 ? this.state.tabNames.indexOf(this.props.pageDeque.bottom().type.displayText) : 0} 
                            onChange={this.tabChange}
                            variant='scrollable'
                            scrollButtons='auto'
                        >
                            {React.Children.map(this.props.children, (child, index) => <CustomTab label={this.state.tabNames[index]}/>)}
                        </Tabs>
                    </Grid>
                    <Grid item>
                        <Box
                            display='flex'
                            height={1}
                        >
                            <Box
                                display='flex'
                                height={1}
                                margin={this.props.theme.spacing(0, CONSTANTS.ICON_BUTTON_SPACING, 0, CONSTANTS.ICON_BUTTON_SPACING)}
                            >
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
        this.props.pageDeque.push(React.Children.toArray(this.props.children)[tabIndex]);
        this.props.pageDeque.finish();

        window.scrollTo(0, 0);
    }
}

NavigationBar.propTypes = {
    links: PropTypes.arrayOf(PropTypes.element),
    theme: PropTypes.object.isRequired,
    pageDeque: PageDequePropType.isRequired,
    children: OneOrMoreElementsPropType
};

export default withTheme(NavigationBar);