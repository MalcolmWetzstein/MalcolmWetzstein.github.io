import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Box, Dialog, IconButton, Grid } from '@material-ui/core';
import { CustomComponent } from '.';
import { ZeroOrMoreElementsPropType } from './Util';
import * as CONSTANTS from '../Constants';

import CloseIcon from '@material-ui/icons/Close';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

class Gallery extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            open: false,
            fullScreenImage: null,
            scrollEdge: true
        };

        this.galleryRef = React.createRef();

        this.onClose = this.onClose.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.onSlideLeft = this.onSlideLeft.bind(this);
        this.onSlideRight = this.onSlideRight.bind(this);
        this.onPrevious = this.onPrevious.bind(this);
        this.onNext = this.onNext.bind(this);
    }

    render()
    {
        let galleryRef = this.galleryRef.current;

        return (
            <React.Fragment>
                <Box
                    display='flex'
                    position='relative'
                    flexWrap='nowrap'
                    style={{ overflowX: 'auto' }}
                    ref={this.galleryRef}
                    onScroll={this.onScroll}
                >
                    {
                        React.Children.map(this.props.children, (child, index) => React.cloneElement(child, {
                            height: this.props.height,
                            onClick: this.onOpenImage(index)
                        }))
                    }
                    <Dialog
                        fullScreen
                        open={ this.state.open }
                    >
                        <Box
                            position='absolute'
                            top={0}
                            right={0}
                            margin={this.props.theme.spacing(CONSTANTS.ICON_BUTTON_SPACING, CONSTANTS.GALLERY_SIDE_MARGIN, 0, 0)}
                        >
                            <IconButton onClick={this.onClose}>
                                <CloseIcon/>
                            </IconButton>
                        </Box>
                        <Box
                            position='absolute'
                            left={0}
                            top='50%'
                            style={{
                                WebkitTransform: 'translateY(-50%)',
                                msTransform: 'translateY(-50%)',
                                transform: 'transformY(-50%)',
                                WebkitTouchCallout: 'none',
                                WebkitUserSelect: 'none',
                                KhtmlUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none',
                                userSelect: 'none'
                            }}
                            margin={this.props.theme.spacing(0, 0, 0, CONSTANTS.GALLERY_SIDE_MARGIN)}
                        >
                            <IconButton
                                onClick={this.onPrevious}
                                disabled={this.state.fullScreenImage === 0}
                            >
                                <NavigateBeforeIcon/>
                            </IconButton>
                        </Box>
                        <Box
                            position='absolute'
                            right={0}
                            top='50%'
                            style={{
                                WebkitTransform: 'translateY(-50%)',
                                msTransform: 'translateY(-50%)',
                                transform: 'transformY(-50%)',
                                WebkitTouchCallout: 'none',
                                WebkitUserSelect: 'none',
                                KhtmlUserSelect: 'none',
                                MozUserSelect: 'none',
                                msUserSelect: 'none',
                                userSelect: 'none'
                            }}
                            margin={this.props.theme.spacing(0, CONSTANTS.GALLERY_SIDE_MARGIN, 0, 0)}
                        >
                            <IconButton
                                onClick={this.onNext}
                                disabled={this.state.fullScreenImage === React.Children.count(this.props.children) - 1}
                            >
                                <NavigateNextIcon/>
                            </IconButton>
                        </Box>
                        {this.state.fullScreenImage != null ? React.cloneElement(React.Children.toArray(this.props.children)[this.state.fullScreenImage], { fullScreen: true }) : undefined}
                    </Dialog>
                </Box>
                <Box margin={this.props.theme.spacing(CONSTANTS.ICON_BUTTON_SPACING, 0, CONSTANTS.ICON_BUTTON_SPACING, 0)}>
                    <Grid
                        container
                        spacing={1}
                        justify='center'
                    >
                        <Grid item>
                            <IconButton
                                onClick={this.onSlideLeft}
                                disabled={galleryRef && galleryRef.scrollLeft === 0}
                            >
                                <NavigateBeforeIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={this.onOpenImage()}
                                disabled={React.Children.count(this.props.children) === 0}
                            >
                                <FullscreenIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={this.onSlideRight}
                                disabled={galleryRef && galleryRef.clientWidth + galleryRef.scrollLeft >= galleryRef.scrollWidth - 1}
                            >
                                <NavigateNextIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </React.Fragment>
        );
    }

    onOpenImage(index)
    {
        if (index == null)
            return () => {
                let galleryRef = this.galleryRef.current
                if (galleryRef)
                {
                    for (let i = 0; i < galleryRef.children.length; i++)
                    {
                        if (galleryRef.children[i].offsetLeft >= galleryRef.scrollLeft)
                        {
                            this.setState({
                                open: true,
                                fullScreenImage: i
                            });
                            break;
                        }
                    }
                }
            }
        else
            return () => this.setState({
                open: true,
                fullScreenImage: index
            });
    }

    onClose()
    {
        this.setState({ open: false });
    }

    onScroll()
    {
        let galleryRef = this.galleryRef.current;
        if (galleryRef)
        {
            if (galleryRef.scrollLeft === 0 || galleryRef.clientWidth + galleryRef.scrollLeft >= galleryRef.scrollWidth - 1)
                this.setState({ scrollEdge: true });
            else if (this.state.scrollEdge)
                this.setState({ scrollEdge: false });
        }
    }

    onSlideLeft()
    {
        let galleryRef = this.galleryRef.current;
        if (galleryRef)
        {
            let scrollToElt = null;
            for (let child of Array.from(galleryRef.children).reverse())
            {
                if (child.offsetLeft < galleryRef.scrollLeft)
                {
                    scrollToElt = child;
                    break;
                }
                
            }

            if (scrollToElt)
                galleryRef.scrollTo({
                    top: 0,
                    left: scrollToElt.offsetLeft + scrollToElt.clientWidth - galleryRef.clientWidth,
                    behavior: 'smooth'
                });
        }
    }

    onSlideRight()
    {
        let galleryRef = this.galleryRef.current;
        if (galleryRef)
        {
            let scrollToElt = null;
            for (let child of galleryRef.children)
            {
                if (child.offsetLeft + child.clientWidth > galleryRef.scrollLeft + galleryRef.clientWidth + 1)
                {
                    scrollToElt = child;
                    break;
                }
            }

            if (scrollToElt)
                galleryRef.scrollTo({
                    top: 0,
                    left: scrollToElt.offsetLeft,
                    behavior: 'smooth'
                });
        }
    }

    onPrevious()
    {
        if (this.state.fullScreenImage > 0)
            this.setState({ fullScreenImage: this.state.fullScreenImage - 1 });
    }

    onNext()
    {
        if (this.state.fullScreenImage < React.Children.count(this.props.children) - 1)
            this.setState({ fullScreenImage: this.state.fullScreenImage + 1 });
    }
}

Gallery.defaultProps = { height: 180 };

Gallery.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    theme: PropTypes.object.isRequired,
    children: ZeroOrMoreElementsPropType
};

export default withTheme(Gallery);