import React from 'react';
import CustomComponent from './CustomComponent';
import { Box, Container, withTheme } from '@material-ui/core';
import { Space } from '../components/Custom';
import * as CONSTANTS from '../Constants';

class Page extends CustomComponent
{
    render()
    {
        return (
            <Box 
                position='absolute'
                width={1} 
                minHeight={1} 
                padding={this.props.theme.spacing(CONSTANTS.SPACE_SIZES['xl'], 0, CONSTANTS.SPACE_SIZES['xl'], 0)}
            >
                <Container maxWidth={this.props.maxWidth}>
                    <Space/>
                    {React.Children.map(this.props.children, child => this.props.pageDeque.withDequeProps(child))}
                </Container>
            </Box>
        );
    }
}

export default withTheme(Page);