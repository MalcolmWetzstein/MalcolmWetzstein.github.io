import React from 'react';
import CustomComponent from './CustomComponent';
import { Box, Container, withTheme } from '@material-ui/core';
import { Space, OptionalWrapper, Center } from '../components/Custom';
import * as CONSTANTS from '../Constants';

class Page extends CustomComponent
{
    render()
    {
        return (
            <OptionalWrapper
                wrapper={<Center/>}
                condition={this.props.maxWidth === 'fit'}
            >
                <Box 
                    position='absolute'
                    width={this.props.maxWidth === 'fit' ? undefined : 1}
                    minHeight={1} 
                    padding={this.props.theme.spacing(CONSTANTS.SPACE_SIZES['xl'], 0, CONSTANTS.SPACE_SIZES['xl'], 0)}
                >
                    <OptionalWrapper
                        wrapper={<Container maxWidth={this.props.maxWidth}/>}
                        condition={this.props.maxWidth !== 'fit'}
                    >
                        <Space size='sm'/>
                        {React.Children.map(this.props.children, child => this.props.pageDeque.withDequeProps(child))}
                    </OptionalWrapper>
                </Box>
            </OptionalWrapper>
        );
    }
}

export default withTheme(Page);