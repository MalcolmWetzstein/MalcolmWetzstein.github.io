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
        };

        this.galleryRef = React.createRef();

        this.onClose = this.onClose.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.onSlideLeft = this.onSlideLeft.bind(this);
        this.onSlideRight = this.onSlideRight.bind(this);
    }

    render()
    {
        let scrollElt = this.galleryRef.current;

        return (
            <React.Fragment>
                <Box
                    display='flex'
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
                            margin={this.props.theme.spacing(CONSTANTS.ICON_BUTTON_SPACING, CONSTANTS.ICON_BUTTON_SPACING, 0, 0)}
                        >
                            <IconButton onClick={this.onClose}>
                                <CloseIcon/>
                            </IconButton>
                        </Box>
                        {this.state.fullScreenImage != null ? React.cloneElement(React.Children.toArray(this.props.children)[this.state.fullScreenImage], { width: 1 }) : undefined}
                    </Dialog>
                </Box>
                <Box margin={this.props.theme.spacing(CONSTANTS.ICON_BUTTON_SPACING, 0, CONSTANTS.ICON_BUTTON_SPACING, 0)}>
                    <Grid
                        container
                        justify='space-around'
                        
                    >
                        <Grid item>
                            <IconButton
                                onClick={this.onSlideLeft}
                                disabled={scrollElt && scrollElt.scrollLeft === 0}
                            >
                                <NavigateBeforeIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={this.onOpenImage(0)}
                                disabled={React.Children.count(this.props.children) === 0}
                            >
                                <FullscreenIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={this.onSlideRight}
                                disabled={scrollElt && scrollElt.clientWidth + scrollElt.scrollLeft >= scrollElt.scrollWidth - 1}
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
        if (this.galleryRef.current)
        {
            let scrollElt = this.galleryRef.current;
            if (scrollElt.scrollLeft === 0 || scrollElt.clientWidth + scrollElt.scrollLeft >= scrollElt.scrollWidth - 1)
                this.forceUpdate();
        }
    }

    onSlideLeft()
    {
        if (this.galleryRef.current)
            this.galleryRef.current.scrollBy({
                top: 0,
                left: -this.galleryRef.current.clientWidth,
                behavior: 'smooth'
            });
    }

    onSlideRight()
    {
        if (this.galleryRef.current)
            this.galleryRef.current.scrollBy({
                top: 0,
                left: this.galleryRef.current.clientWidth,
                behavior: 'smooth'
            });
    }
}

Gallery.defaultProps = { height: 180 };

Gallery.propTypes = {
    height: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    theme: PropTypes.object.isRequired,
    children: ZeroOrMoreElementsPropType
};

export default withTheme(Gallery);