import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Fab, Fade, withTheme } from '@material-ui/core';
import { CustomComponent, Space, OptionalWrapper, Center } from '.';
import * as CONSTANTS from '../Constants';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class Page extends CustomComponent
{
    static lastPage;

    constructor(props)
    {
        super(props);

        this.state = { showScrollToTop: window.scrollY > this.props.theme.spacing(CONSTANTS.BACK_TO_TOP_FADE_IN_POINT) };

        this.onScroll = this.onScroll.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount()
    {
        if (Page.lastPage !== this.props.id) {
            this.scrollToTop();
            setTimeout(this.scrollToTop, 100); // A bit of a hack, sometimes scrollToTop doesn't work if called immeadiately on page refresh.
        }

        Page.lastPage = this.props.id;

        window.addEventListener('scroll', this.onScroll);
    }

    render()
    {
        return (
            <React.Fragment>
                <OptionalWrapper
                    wrapper={<Center/>}
                    condition={this.props.maxWidth === 'fit'}
                >
                    <Box 
                        position='absolute'
                        width={this.props.maxWidth === 'fit' ? undefined : 1}
                        padding={this.props.theme.spacing(CONSTANTS.SPACE_SIZES['sm'], 0, CONSTANTS.SPACE_SIZES['xl'], 0)}
                    >
                        <OptionalWrapper
                            wrapper={<Container maxWidth={this.props.maxWidth}/>}
                            condition={this.props.maxWidth !== 'fit'}
                        >
                            <Space size='sm'/>
                            {React.Children.map(this.props.children, child => this.props.pageDeque.withDequeProps(child))}
                        </OptionalWrapper>
                    </Box>
                </OptionalWrapper>
                <Box
                    position='fixed'
                    bottom={this.props.theme.spacing(CONSTANTS.BACK_TO_TOP_MARGIN)}
                    right={this.props.theme.spacing(CONSTANTS.BACK_TO_TOP_MARGIN)}
                >
                    <Fade in={this.state.showScrollToTop}>
                        <Fab
                            onClick={this.scrollToTop}
                            size='medium'
                            color='default'
                        >
                            <KeyboardArrowUpIcon/>
                        </Fab>
                    </Fade>
                </Box>
            </React.Fragment>
        );
    }

    componentWillUnmount()
    {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll()
    {
        if (window.scrollY > this.props.theme.spacing(CONSTANTS.BACK_TO_TOP_FADE_IN_POINT))
        {
            if (!this.state.showScrollToTop)
                this.setState({ showScrollToTop: true });
        }
        else
        {
            if (this.state.showScrollToTop)
                this.setState({ showScrollToTop: false });
        }
    }

    scrollToTop()
    {
        window.scrollTo(0, 0);
    }
}

Page.propTypes = {
    theme: PropTypes.object.isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'fit']),
    pageDeque: PropTypes.shape({
        push: PropTypes.func.isRequired,
        unshift: PropTypes.func.isRequired,
        insert: PropTypes.func.isRequired,
        pop: PropTypes.func.isRequired,
        shift: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired,
        clear: PropTypes.func.isRequired,
        top: PropTypes.func.isRequired,
        bottom: PropTypes.func.isRequired,
        pageAt: PropTypes.func.isRequired,
        swapTop: PropTypes.func.isRequired,
        swapBottom: PropTypes.func.isRequired,
        swapAt: PropTypes.func.isRequired,
        finish: PropTypes.func.isRequired,
        withDequeProps: PropTypes.func.isRequired
    }).isRequired,
    children: PropTypes.node
};

export default withTheme(Page);