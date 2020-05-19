import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Card, CardActionArea, CardContent, Collapse, Divider, Grid, Box, Button, Hidden } from '@material-ui/core';
import { CustomComponent, Bullets, Image, ConditionalRender } from '.';
import * as CONSTANTS from '../Constants';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class TimelineTile extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.state = { open: false }

        this.ref = React.createRef();

        this.onClick = this.onClick.bind(this);
    }

    render()
    {
        let imageHeightCompact = this.props.mobileCompact ? CONSTANTS.TIMELINE_TILE_IMAGE_HEIGHT_COMPACT : CONSTANTS.TIMELINE_TILE_IMAGE_HEIGHT;
        let arrowMarginCompact = this.props.mobileCompact ? CONSTANTS.TIMELINE_TILE_ARROW_ICON_MARGIN_COMPACT : CONSTANTS.TIMELINE_TILE_ARROW_ICON_MARGIN;

        return (
            <Card
                elevation={2}
                ref={this.ref}
            >
                <CardActionArea
                    onClick={this.onClick}
                    disableRipple
                >
                    <CardContent>
                        <Grid
                            container
                            justify='space-between'
                            wrap='nowrap'
                        >
                            <Grid item>
                                {this.props.children}
                            </Grid>
                            <Grid item>
                                <Box
                                    display='flex'
                                    alignItems='center'
                                    height={1}
                                >
                                    <ConditionalRender condition={this.props.image}>
                                        <Hidden smDown>
                                            <Box marginRight={this.props.theme.spacing(CONSTANTS.TIMELINE_TILE_ARROW_ICON_MARGIN) + 'px'}>
                                                <Image
                                                    src={this.props.image}
                                                    alt={this.props.imageInfo}
                                                    height={this.props.theme.spacing(CONSTANTS.TIMELINE_TILE_IMAGE_HEIGHT)}
                                                />
                                            </Box>
                                        </Hidden>
                                        <Hidden mdUp xsDown>
                                            <Box marginRight={this.props.theme.spacing(arrowMarginCompact) + 'px'}>
                                                <Image
                                                    src={this.props.image}
                                                    alt={this.props.imageInfo}
                                                    height={this.props.theme.spacing(imageHeightCompact)}
                                                />
                                            </Box>
                                        </Hidden>
                                    </ConditionalRender>
                                    <ConditionalRender condition={this.props.details}>
                                        {this.state.open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                                    </ConditionalRender>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                <ConditionalRender condition={this.props.details}>
                    <Collapse in={this.state.open}>
                        <Divider/>
                        <Box position='relative'>
                            <CardContent>
                                <Bullets
                                    focus
                                    bullets={this.props.details}
                                />
                                <Box
                                    position='absolute'
                                    right={0}
                                    bottom={0}
                                    margin={this.props.theme.spacing(0, CONSTANTS.EXPANSION_CLOSE_BUTTON_MARGIN, CONSTANTS.EXPANSION_CLOSE_BUTTON_MARGIN, 0)}
                                >
                                    <Button
                                        onClick={this.onClick}
                                        size='small'
                                    >
                                        Close
                                    </Button>
                                </Box>
                            </CardContent>
                        </Box>
                    </Collapse>
                </ConditionalRender>
            </Card>
        );
    }
    
    onClick()
    {
        this.setState({ open: !this.state.open });

        if (this.ref.current && this.ref.current.getBoundingClientRect().top < 0)
            window.scrollTo({
                behavior: 'smooth',
                top: this.ref.current.offsetTop - this.props.theme.spacing(CONSTANTS.SPACE_SIZES['xl']),
                left: this.ref.current.offsetLeft
            });
    }
}

TimelineTile.propTypes = {
    theme: PropTypes.object.isRequired,
    image: PropTypes.string,
    imageInfo: PropTypes.string,
    details: PropTypes.node,
    mobileCompact: PropTypes.bool,
    children: PropTypes.node.isRequired
};

export default withTheme(TimelineTile);