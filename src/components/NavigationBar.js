import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, withTheme, Box, Button, Grid, Hidden, IconButton, Drawer, Tab, Divider } from '@material-ui/core';
import { CustomComponent, CustomTab } from '.';
import { reKey, PageDequePropType, OneOrMoreElementsPropType } from './Util';
import * as CONSTANTS from '../Constants';

import MenuIcon from '@material-ui/icons/Menu';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

class NavigationBar extends CustomComponent 
{
    constructor(props)
    {
        super(props);

        this.state = {
            tabNames: [],
            menuOpen: false
        }

        this.onClickHome = this.onClickHome.bind(this);
        this.onOpenMenu = this.onOpenMenu.bind(this);
        this.onCloseMenu = this.onCloseMenu.bind(this);
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
            <AppBar>
                <Grid
                    container
                    justify='space-between'
                    alignItems='center'
                    wrap='nowrap'
                >
                    <Grid item>
                        <Hidden mdDown>
                            <Box
                                margin={this.props.theme.spacing(0, CONSTANTS.ICON_BUTTON_SPACING, 0, CONSTANTS.ICON_BUTTON_SPACING)}
                                minWidth={this.props.theme.spacing(CONSTANTS.ICON_BUTTON_SIZE * this.props.links.length)}
                            >
                                {this.renderHomeButton()}
                            </Box>
                        </Hidden>
                        <Hidden lgUp>
                            <Box
                                margin={this.props.theme.spacing(0, CONSTANTS.ICON_BUTTON_SPACING, 0, CONSTANTS.ICON_BUTTON_SPACING)}
                            >
                                {this.renderHomeButton()}
                            </Box>
                        </Hidden>
                    </Grid>
                    <Hidden smDown>
                        <Grid
                            item
                            zeroMinWidth
                        >
                            <Tabs 
                                indicatorColor='secondary' 
                                value={this.tabsValue()} 
                                onChange={this.onTabChange}
                                variant='scrollable'
                                scrollButtons='auto'
                            >
                                {React.Children.map(this.props.children, (child, index) => <CustomTab label={this.state.tabNames[index]}/>)}
                            </Tabs>
                        </Grid>
                    </Hidden>
                    <Grid item>
                        <Hidden mdDown>
                            <Box
                                display='flex'
                                margin={this.props.theme.spacing(0, CONSTANTS.ICON_BUTTON_SPACING, 0, CONSTANTS.ICON_BUTTON_SPACING)}
                                minWidth={this.props.theme.spacing(CONSTANTS.HOME_BUTTON_SIZE)}
                            >
                                {reKey(this.props.links)}
                            </Box>
                        </Hidden>
                        <Hidden lgUp smDown>
                            <Box
                                display='flex'
                                margin={this.props.theme.spacing(0, CONSTANTS.ICON_BUTTON_SPACING, 0, CONSTANTS.ICON_BUTTON_SPACING)}
                            >
                                {reKey(this.props.links)}
                            </Box>
                        </Hidden>
                        <Hidden mdUp>
                            <Box margin={this.props.theme.spacing(0, CONSTANTS.ICON_BUTTON_SPACING, 0, CONSTANTS.ICON_BUTTON_SPACING)}>
                                <IconButton onClick={this.onOpenMenu}>
                                    <MenuIcon/>
                                </IconButton>
                            </Box>
                        </Hidden>
                    </Grid>
                </Grid>
                <Drawer
                    anchor='right'
                    open={this.state.menuOpen}
                    onClose={this.onCloseMenu}
                >
                    <Box margin={this.props.theme.spacing(CONSTANTS.ICON_BUTTON_SPACING, CONSTANTS.ICON_BUTTON_SPACING, CONSTANTS.ICON_BUTTON_SPACING, CONSTANTS.ICON_BUTTON_SPACING)}>
                        <Grid container>
                            <Grid item>
                                <IconButton onClick={this.onCloseMenu}>
                                    <NavigateNextIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider/>
                    <Tabs 
                        indicatorColor='secondary' 
                        value={this.tabsValue()} 
                        onChange={this.onTabChange}
                        variant='standard'
                        orientation='vertical'
                    >
                        {React.Children.map(this.props.children, (child, index) => <Tab label={this.state.tabNames[index]}/>)}
                    </Tabs>
                    <Divider/>
                    <Box margin={this.props.theme.spacing(CONSTANTS.ICON_BUTTON_SPACING, CONSTANTS.ICON_BUTTON_SPACING, CONSTANTS.ICON_BUTTON_SPACING, CONSTANTS.ICON_BUTTON_SPACING)}>
                        <Grid container>
                            {  
                                this.props.links.map(link =>
                                    <Grid item>
                                        {link}
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Box>
                </Drawer>
            </AppBar>
        );
    }

    renderHomeButton()
    {
        return (
            <Button
                onClick={this.onClickHome}
                disabled={this.tabsValue() === false}
            >
                MXW
            </Button>
        );
    }

    onClickHome()
    {
        this.showPage(this.props.homePage);
    }

    onOpenMenu()
    {
        this.setState({ menuOpen: true });
    }

    onCloseMenu()
    {
        this.setState({ menuOpen: false });
    }

    onMenuSelect(tabIndex)
    {
        return () => {
            this.navigate(tabIndex);
            this.setState({ menuOpen: false });
        };
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