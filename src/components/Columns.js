import React from 'react';
import CustomComponent from './CustomComponent';
import { Grid, Divider, Box, withTheme } from '@material-ui/core';
import * as CONSTANTS from '../Constants';

class Columns extends CustomComponent
{
    render()
    {
        return (
            <Grid container justify={this.props.justify ? this.props.justify : 'flex-start'}>
                {this.columnsFromChildren()}
            </Grid>
        );
    }

    columnsFromChildren()
    {
        const length = React.Children.count(this.props.children);
        const marginSize = this.props.size ? this.props.size * CONSTANTS.UNIT_INDENT : CONSTANTS.UNIT_INDENT
        const setMargins = this.props.justify ? (this.props.justify === 'flex-start' || this.props.justify === 'flex-end' || this.props.justify === 'center' ? true : false) : true;

        if (length === 1)
            return this.passDequeProps(this.props.children);

        return React.Children.map(this.props.children, 
            (child, index) =>
            {
                if (index === 0) // First Column
                {
                    return (
                        <Box margin={this.props.theme.spacing(0, setMargins ? marginSize : 0, 0, 0)}>
                            {this.passDequeProps(child)}
                        </Box>
                    );
                }
                else if (index === length-1) // End Column
                {
                    return (
                        <React.Fragment>
                            <Box margin="0px, 1px, 0px, 1px">
                                <Divider orientation="vertical"/>
                            </Box>
                            <Box margin={this.props.theme.spacing(0, 0, 0, setMargins ? marginSize : 0)}>
                                {this.passDequeProps(child)}
                            </Box>
                        </React.Fragment>
                    );
                }
                else // Middle Column
                {
                    return (
                        <React.Fragment>
                            <Box margin="0px, 1px, 0px, 1px">
                                <Divider orientation="vertical"/>
                            </Box>
                            <Box margin={this.props.theme.spacing(0, setMargins ? marginSize : 0, 0, setMargins ? marginSize : 0)}>
                                {this.passDequeProps(child)}
                            </Box>
                        </React.Fragment>
                    );
                }
            }
        );
    }

    passDequeProps(child)
    {
        return this.props.pageDeque ? this.props.pageDeque.withDequeProps(child) : child;
    }
}

export default withTheme(Columns);