import React from 'react';
import { withTheme, Typography } from '@material-ui/core';
import { CustomComponent, Space, Indent } from '.';
import * as CONSTANTS from '../Constants';

class SectionHeader extends CustomComponent
{
    render()
    {
        return (
            <Indent level={Math.min(Math.max(4 - (this.props.subLevel ? this.props.subLevel : 1), 0), 3)}>
                <Typography
                    component='h2'
                    variant={this.props.variant ? this.props.variant : CONSTANTS.SECTION_HEADER_VARIANT}
                >
                    {this.props.children}
                </Typography>
                <Space size='sm'/>
            </Indent>
        );
    }
}

export default withTheme(SectionHeader);