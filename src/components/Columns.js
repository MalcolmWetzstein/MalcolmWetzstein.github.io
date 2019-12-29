import React from 'react';
import CustomComponent from './CustomComponent';
import { Grid, Divider, Box, withTheme } from '@material-ui/core';
import * as CONSTANTS from '../Constants';

class Columns extends CustomComponent
{
    render()
    {
        return (
            <Grid container>
                {this.columnsFromChildren()}
            </Grid>
        );
    }

    columnsFromChildren()
    {
        const length = React.Children.count(this.props.children);
        const marginSize = this.props.size ? this.props.size * CONSTANTS.UNIT_INDENT : CONSTANTS.UNIT_INDENT

        if (length === 1)
            return this.props.pageDeque.withDequeProps(this.props.children);

        return React.Children.map(this.props.children, 
            (child, index) =>
            {
                if (index === 0) // First Column
                {
                    return (
                        <Box margin={this.props.theme.spacing(0, marginSize, 0, 0)}>
                            {this.props.pageDeque.withDequeProps(child)}
                        </Box>
                    );
                }
                else if (index === length-1) // End Column
                {
                    return (
                        <React.Fragment>
                            <Box marginLeft="1px">
                                <Divider orientation="vertical"/>
                            </Box>
                            <Box margin={this.props.theme.spacing(0, 0, 0, marginSize)}>
                                {this.props.pageDeque.withDequeProps(child)}
                            </Box>
                        </React.Fragment>
                    );
                }
                else // Middle Column
                {
                    return (
                        <React.Fragment>
                            <Box marginLeft="1px">
                                <Divider orientation="vertical"/>
                            </Box>
                            <Box margin={this.props.theme.spacing(0, marginSize, 0, marginSize)}>
                                {this.props.pageDeque.withDequeProps(child)}
                            </Box>
                        </React.Fragment>
                    );
                }
            }
        );
    }
}

export default withTheme(Columns);