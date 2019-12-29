import React from 'react';
import CustomComponent from './CustomComponent';
import { Container, Box, Divider, withTheme } from '@material-ui/core';
import * as CONSTANTS from '../Constants';

/*
 * TODO: 
 * Add prop option for large (fullscreen on 1080p monitor), medium, and small title sections.
 * Add prop option for including footer spacing (defaults to true)
 */

class Partition extends CustomComponent
{
    render()
    {
        return (
            <Container maxWidth="lg">
                {this.partitionsFromChildren()}
            </Container>
        );
    }

    partitionsFromChildren()
    {
        const length = React.Children.count(this.props.children);

        if (length === 1)
            return (
                <Box margin={this.props.theme.spacing(CONSTANTS.UNIT_SPACE, 0, CONSTANTS.UNIT_SPACE, 0)}>
                    {React.Children.map(this.props.children, child => this.props.pageDeque.withDequeProps(child))}
                </Box>
            );

        return React.Children.map(this.props.children, 
            (child, index) =>
            {
                if (index === 0) // Title Partition
                {
                    return (
                        <Box margin={this.props.theme.spacing(CONSTANTS.UNIT_SPACE*1.5, 0, CONSTANTS.UNIT_SPACE, 0)}>
                            {this.props.pageDeque.withDequeProps(child)}
                        </Box>
                    );
                }
                else if (index === length-1) // Footer Partition
                {
                    return (
                        <React.Fragment>
                            <Divider/>
                            <Box margin={this.props.theme.spacing(CONSTANTS.UNIT_SPACE, 0, 0, 0)}>
                                {this.props.pageDeque.withDequeProps(child)}
                            </Box>
                        </React.Fragment>
                    );
                }
                else // Middle Partition
                {
                    return (
                        <React.Fragment>
                            <Divider/>
                            <Box margin={this.props.theme.spacing(CONSTANTS.UNIT_SPACE, 0, CONSTANTS.UNIT_SPACE, 0)}>
                                {this.props.pageDeque.withDequeProps(child)}
                            </Box>
                        </React.Fragment>
                    );
                }
            }
        );
    }
}

export default withTheme(Partition);