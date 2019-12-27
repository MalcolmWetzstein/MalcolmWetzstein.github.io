import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { withTheme } from '@material-ui/core/styles';

/*
 * TODO: 
 * Add prop option for large (fullscreen on 1080p monitor), medium, and small title sections.
 * Add prop option for including footer spacing (defaults to true)
 */

class Partition extends React.Component
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
                <Box margin={this.props.theme.spacing(6, 0, 6, 0)}>
                    {React.Children.map(this.props.children, child => this.props.pageDeque.withDequeProps(child))}
                </Box>
            );

        return React.Children.map(this.props.children, 
            (child, index) =>
            {
                if (index === 0) // Title Partition
                {
                    return (
                        <Box margin={this.props.theme.spacing(8, 0, 8, 0)}>
                            {this.props.pageDeque.withDequeProps(child)}
                        </Box>
                    );
                }
                else if (index === length-1) // Footer Partition
                {
                    return (
                        <React.Fragment>
                            <Divider/>
                            <Box margin={this.props.theme.spacing(6, 0, 0, 0)}>
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
                            <Box margin={this.props.theme.spacing(6, 0, 6, 0)}>
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