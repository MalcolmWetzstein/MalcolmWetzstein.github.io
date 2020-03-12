import React from 'react';
import CustomComponent from './CustomComponent';
import { Box, Container, Fab, withTheme } from '@material-ui/core';
import { Space, OptionalWrapper, Center } from '../components/Custom';
import * as CONSTANTS from '../Constants';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class Page extends CustomComponent
{
    static lastPage;

    constructor(props)
    {
        super(props);

        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount()
    {
        if (Page.lastPage !== this.props.id)
        {
            this.scrollToTop();
            console.log('amazing');
        }

        Page.lastPage = this.props.id;
    }

    render()
    {
        return (
            <OptionalWrapper
                wrapper={<Center/>}
                condition={this.props.maxWidth === 'fit'}
            >
                <Box 
                    position='absolute'
                    width={this.props.maxWidth === 'fit' ? undefined : 1}
                    minHeight={1} 
                    padding={this.props.theme.spacing(CONSTANTS.SPACE_SIZES['xl'], 0, CONSTANTS.SPACE_SIZES['xl'], 0)}
                >
                    <OptionalWrapper
                        wrapper={<Container maxWidth={this.props.maxWidth}/>}
                        condition={this.props.maxWidth !== 'fit'}
                    >
                        <Space size='sm'/>
                        {React.Children.map(this.props.children, child => this.props.pageDeque.withDequeProps(child))}
                    </OptionalWrapper>
                    <Fab onClick={this.scrollToTop}>
                        <KeyboardArrowUpIcon/>
                    </Fab>
                </Box>
            </OptionalWrapper>
        );
    }

    scrollToTop()
    {
        window.scrollTo(0, 0);
    }
}

export default withTheme(Page);