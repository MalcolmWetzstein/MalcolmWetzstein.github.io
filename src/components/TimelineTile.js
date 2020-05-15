import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Card, CardActionArea, CardContent, Collapse, Divider, Grid, Box, Button } from '@material-ui/core';
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
                        >
                            <Grid
                                item
                                xs={CONSTANTS.TIMELINE_TILE_DISPLAY_AREA}
                            >
                                {this.props.children}
                            </Grid>
                            <Grid
                                item
                                xs={12 - CONSTANTS.TIMELINE_TILE_DISPLAY_AREA}
                                container
                                justify='flex-end'
                                alignItems='center'
                                spacing={CONSTANTS.TIMELINE_TILE_ARROW_ICON_MARGIN}
                            >
                                <ConditionalRender condition={this.props.image}>
                                    <Grid item>
                                        <Image
                                            src={this.props.image}
                                            alt={this.props.imageInfo}
                                            height={this.props.theme.spacing(CONSTANTS.TIMELINE_TILE_IMAGE_HEIGHT)}
                                        />
                                    </Grid>
                                </ConditionalRender>
                                <ConditionalRender condition={this.props.details}>
                                    <Grid item>
                                        {this.state.open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                                    </Grid>
                                </ConditionalRender>
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
            this.ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
    }
}

TimelineTile.propTypes = {
    theme: PropTypes.object.isRequired,
    image: PropTypes.string,
    imageInfo: PropTypes.string,
    details: PropTypes.node,
    children: PropTypes.node.isRequired
};

export default withTheme(TimelineTile);