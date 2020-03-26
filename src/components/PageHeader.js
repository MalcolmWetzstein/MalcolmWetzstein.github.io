import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Typography, Divider } from '@material-ui/core';
import { CustomComponent, Space } from '.';
import * as CONSTANTS from '../Constants';

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

PageHeader.propTypes = { children: PropTypes.node.isRequired };

export default withTheme(PageHeader);