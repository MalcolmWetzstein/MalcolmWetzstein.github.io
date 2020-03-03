import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme, Card, CardActionArea, CardContent, CardMedia, Box, Collapse, Divider, Grid } from '@material-ui/core';
import { Bullets } from './Custom';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class TimelineTile extends CustomComponent {
    constructor(props) {
        super(props);

        this.state = { open: false }

        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (
            <Card variant='outlined'>
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
                                    <CardMedia 
                                        image={this.props.image}
                                        title={this.props.imageTitle}
                                        style={{
                                            width: this.props.imageWidth,
                                            height: this.props.imageHeight,
                                            right: '0px'
                                        }}
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
                    <CardContent>
                        <Bullets
                            focus
                            bullets={this.props.details}
                        />
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
    
    onClick() {
        this.setState({ open: !this.state.open })
    }
}

export default withTheme(TimelineTile);