import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

export default class Page extends React.Component
{
    render()
    {
        return (
            <Box>
                <Paper square elevation={0}>
                    {this.props.children}
                </Paper>
            </Box>
        );
    }
}