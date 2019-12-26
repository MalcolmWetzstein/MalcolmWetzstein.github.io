import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { withTheme } from '@material-ui/core/styles';

class Partition extends React.Component
{
    render()
    {
        return (
            <Container maxWidth="lg">
                {this.partitionChildren()}
            </Container>
        );
    }

    partitionChildren()
    {
        const length = React.Children.count(this.props.children);

        if (length === 1)
            return (
                <Box margin={this.props.theme.spacing(12, 0, 12, 0)}>
                    {this.props.children}
                </Box>
            );

        return React.Children.map(this.props.children, 
            (child, index) =>
            {
                if (index === 0)
                {
                    return (
                        <Box margin={this.props.theme.spacing(12, 0, 8, 0)}>
                            {child}
                        </Box>
                    );
                }
                else if (index === length-1)
                {
                    return (
                        <React.Fragment>
                            <Divider/>
                            <Box margin={this.props.theme.spacing(6, 0, 0, 0)}>
                                {child}
                            </Box>
                        </React.Fragment>
                    );
                }
                else
                {
                    return (
                        <React.Fragment>
                            <Divider/>
                            <Box margin={this.props.theme.spacing(6, 0, 6, 0)}>
                                {child}
                            </Box>
                        </React.Fragment>
                    );
                }
            }
        );
    }
}

export default withTheme(Partition);