import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, withTheme, Box, IconButton, Paper, Hidden, Select, MenuItem } from '@material-ui/core';
import { CustomComponent, CustomTab, ConditionalWrapper } from '.';
import * as CONSTANTS from '../Constants';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

class Categories extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.state = { currentTab: 0 }

        this.tabRef = React.createRef();
        this.selectRef = React.createRef();

        this.onChange = this.onChange.bind(this);
        this.onNext = this.onNext.bind(this);
        this.onBack = this.onBack.bind(this);
    }

    render()
    {
        return (
            <React.Fragment>
                <Hidden xsDown>
                    <ConditionalWrapper 
                        wrapper={<Paper square elevation={2}/>}
                        condition={this.props.backdrop}
                    >
                    
                        <ConditionalWrapper
                            wrapper={
                                <Box
                                    display='flex'
                                    justifyContent='center'
                                />
                            }
                            condition={!this.props.sparse}
                        >
                            <Tabs
                                indicatorColor='secondary'
                                value={this.state.currentTab} 
                                onChange={this.onChange}
                                variant={this.props.sparse ? 'fullWidth' : 'scrollable'}
                                scrollButtons='auto'
                                ref={this.tabRef}
                            >
                                {
                                    React.Children.map(this.props.children, (child, index) => 
                                        <CustomTab
                                            sparse={this.props.sparse}
                                            label={this.props.labels[index]}
                                        />
                                    )
                                }
                            </Tabs>
                        </ConditionalWrapper>
                    </ConditionalWrapper>
                </Hidden>
                <Hidden smUp>
                    <Select
                        fullWidth
                        color='secondary'
                        variant={this.props.backdrop ? 'filled' : 'outlined'}
                        value={this.state.currentTab}
                        onChange={this.onChange}
                        ref={this.selectRef}
                    >
                        {React.Children.map(this.props.children, (child, index) => <MenuItem value={index}>{this.props.labels[index].toUpperCase()}</MenuItem>)}
                    </Select>
                </Hidden>
                {React.Children.toArray(this.props.children)[this.state.currentTab]}
                <Box
                    display='flex'
                    width={1}
                    margin={this.props.theme.spacing(CONSTANTS.ICON_BUTTON_SPACING, 0, 0, 0)}
                    justifyContent='center'
                >
                    <IconButton
                        onClick={this.onBack}
                        disabled={this.state.currentTab === 0}
                    >
                        <NavigateBeforeIcon/>
                    </IconButton>
                    <IconButton
                        onClick={this.onNext}
                        disabled={this.state.currentTab === React.Children.count(this.props.children) - 1}
                    >
                        <NavigateNextIcon/>
                    </IconButton>
                </Box>
            </React.Fragment>
        );
    }

    onChange(event, tabIndex)
    {
        this.setState({ currentTab: typeof tabIndex === 'number' ? tabIndex : event.target.value });
    }

    onNext()
    {
        this.setState({ currentTab: Math.min(this.state.currentTab + 1, React.Children.count(this.props.children) - 1) });
        this.scrollToTabs();
    }

    onBack()
    {
        this.setState({ currentTab: Math.max(this.state.currentTab - 1, 0) });
        this.scrollToTabs();
    }

    scrollToTabs()
    {
        setTimeout(() => {
            if (this.tabRef.current)
                window.scrollTo({
                    behavior: 'smooth',
                    top: this.tabRef.current.offsetTop - this.props.theme.spacing(CONSTANTS.SPACE_SIZES['xl']),
                    left: this.tabRef.current.offsetLeft
                });
            else if (this.selectRef.current)
                window.scrollTo({
                    behavior: 'smooth',
                    top: this.selectRef.current.offsetTop - this.props.theme.spacing(CONSTANTS.SPACE_SIZES['xl']),
                    left: this.selectRef.current.offsetLeft
                });
        }, 100);
    }
}

Categories.propTypes = {
    backdrop: PropTypes.bool,
    sparse: PropTypes.bool,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object.isRequired
};

export default withTheme(Categories);