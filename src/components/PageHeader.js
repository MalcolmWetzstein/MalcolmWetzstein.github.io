import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme, Typography, Divider } from '@material-ui/core';
import * as CONSTANTS from '../Constants';
import { Space } from './Custom';

class PageHeader extends CustomComponent
{
    render()
    {
        return (
            <React.Fragment>
                <Typography
                    component='h1'
                    variant={CONSTANTS.PAGE_HEADER_VARIANT}
                    align='center'
                >
                    {this.props.children}
                </Typography>
                <Space size='sm'/>
                <Divider/>
                <Space size='lg'/>
            </React.Fragment>
        );
    }
}

export default withTheme(PageHeader);