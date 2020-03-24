import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Card, CardActionArea, CardContent, Collapse, Divider, Grid, Box, Button } from '@material-ui/core';
import { CustomComponent, Bullets, Image } from '.';

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
                variant='outlined'
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
                                xs={8}
                            >
                                {this.props.children}
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                container
                                justify='flex-end'
                                alignItems='center'
                                spacing={2}
                            >
                                <Grid item>
                                    <Image
                                        src={this.props.image}
                                        alt={this.props.imageInfo}
                                        height={this.props.theme.spacing(9)}
                                    />
                                </Grid>
                                <Grid item>
                                    {this.state.open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
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
                                margin={this.props.theme.spacing(0, 3, 3, 0)}
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

export default withTheme(TimelineTile);