import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, withTheme, Box, Button, Grid, Hidden } from '@material-ui/core';
import { CustomComponent, CustomTab } from '.';
import { reKey, PageDequePropType, OneOrMoreElementsPropType } from './Util';
import * as CONSTANTS from '../Constants';

class NavigationBar extends CustomComponent 
{
    constructor(props)
    {
        super(props);

        this.state = { tabNames: [] }

        this.onClickHome = this.onClickHome.bind(this);
        this.onTabChange = this.onTabChange.bind(this);
    }

    componentDidMount()
    {
        this.setState( { tabNames: React.Children.map(this.props.children, child => child.type.displayText) } );
        this.showPage(this.props.homePage);
    }

    render()
    {
        return (
            <AppBar position='relative'>
                <Grid
                    container
                    justify='space-between'
                    alignItems='center'
                    wrap='nowrap'
                >
                    <Grid item>
                        <Hidden mdDown>
                            <Box
                                display='flex'
                                margin={this.props.theme.spacing(0, CONSTANTS.ICON_BUTTON_SPACING, 0, CONSTANTS.ICON_BUTTON_SPACING)}
                                minWidth={this.props.theme.spacing(CONSTANTS.ICON_BUTTON_SIZE * this.props.links.length)}
                            >
                                <Button
                                    onClick={this.onClickHome}
                                    disabled={this.tabsValue() === false}
                                >
                                    MXW
                                </Button>
                            </Box>
                        </Hidden>
                        <Hidden lgUp>
                            <Box
                                display='flex'
                                margin={this.props.theme.spacing(0, CONSTANTS.ICON_BUTTON_SPACING, 0, CONSTANTS.ICON_BUTTON_SPACING)}
                            >
                                <Button
                                    onClick={this.onClickHome}
                                    disabled={this.tabsValue() === false}
                                >
                                    MXW
                                </Button>
                            </Box>
                        </Hidden>
                    </Grid>
                    <Grid
                        item
                        zeroMinWidth
                    >
                        <Box>
                            <Tabs 
                                indicatorColor='secondary' 
                                value={this.tabsValue()} 
                                onChange={this.onTabChange}
                                variant='scrollable'
                                scrollButtons='auto'
                            >
                                {React.Children.map(this.props.children, (child, index) => <CustomTab label={this.state.tabNames[index]}/>)}
                            </Tabs>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box
                            display='flex'
                            margin={this.props.theme.spacing(0, CONSTANTS.ICON_BUTTON_SPACING, 0, CONSTANTS.ICON_BUTTON_SPACING)}
                            minWidth={this.props.theme.spacing(CONSTANTS.HOME_BUTTON_SIZE)}
                        >
                            {reKey(this.props.links)}
                        </Box>
                    </Grid>
                </Grid>
            </AppBar>
        );
    }

    onClickHome()
    {
        this.showPage(this.props.homePage);
    }

    onTabChange(event, tabIndex)
    {
        this.navigate(tabIndex);
    }

    navigate(tabIndex)
    {
        this.showPage(React.Children.toArray(this.props.children)[tabIndex]);
    }

    showPage(page)
    {
        this.props.pageDeque.clear();
        this.props.pageDeque.push(page);
        this.props.pageDeque.finish();

        window.scrollTo(0, 0);
    }

    tabsValue()
    {
        if (this.state.tabNames.length > 0)
        {
            const tabIndex = this.state.tabNames.indexOf(this.props.pageDeque.bottom().type.displayText);
            if (tabIndex > -1)
                return tabIndex;
        }

        return false;
    }
}

NavigationBar.defaultProps = { links: [] };

NavigationBar.propTypes = {
    links: PropTypes.arrayOf(PropTypes.element),
    theme: PropTypes.object.isRequired,
    homePage: PropTypes.element.isRequired,
    pageDeque: PageDequePropType.isRequired,
    children: OneOrMoreElementsPropType
};

export default withTheme(NavigationBar);