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
        return this.props.center ? (
            <Container maxWidth={this.props.maxWidth ? this.props.maxWidth : 'lg'}>
                {this.partitionsFromChildren()}
            </Container>
        ) : (
            <Box maxWidth={this.interpretMaxWidth(this.props.maxWidth ? this.props.maxWidth : 'lg')}>
                {this.partitionsFromChildren()}
            </Box>
        );
    }

    partitionsFromChildren()
    {
        const SPACING = this.props.spacing ? this.props.spacing : CONSTANTS.UNIT_SPACE;
        const length = React.Children.count(this.props.children);

        if (length === 1)
            return (
                <Box margin={this.props.theme.spacing(SPACING, 0, SPACING, 0)}>
                    {React.Children.map(this.props.children, child => this.props.pageDeque.withDequeProps(child))}
                </Box>
            );

        return React.Children.map(this.props.children, 
            (child, index) =>
            {
                if (index === 0) // Title Partition
                {
                    return (
                        <Box margin={this.props.theme.spacing(SPACING, 0, SPACING*2/3, 0)}>
                            {this.props.pageDeque.withDequeProps(child)}
                        </Box>
                    );
                }
                else if (index === length-1) // Footer Partition
                {
                    return (
                        <React.Fragment>
                            <Divider/>
                            <Box margin={this.props.theme.spacing(SPACING, 0, 0, 0)}>
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
                            <Box margin={this.props.theme.spacing(SPACING, 0, SPACING, 0)}>
                                {this.props.pageDeque.withDequeProps(child)}
                            </Box>
                        </React.Fragment>
                    );
                }
            }
        );
    }

    interpretMaxWidth(maxWidth)
    {
        if (maxWidth === 'xl')
            return 'none';
        else if (maxWidth === 'lg')
            return '1280px';
        else if (maxWidth === 'md')
            return '960px';
        else if (maxWidth === 'sm')
            return '600px';
        else if (maxWidth === 'xs')
            return '444px';
        
        return maxWidth;
    }
}

export default withTheme(Partition);