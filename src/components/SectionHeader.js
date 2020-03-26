import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Typography } from '@material-ui/core';
import { CustomComponent, Space, Indent } from '.';
import * as CONSTANTS from '../Constants';

class SectionHeader extends CustomComponent
{
    render()
    {
        return (
            <Indent level={Math.min(Math.max(4 - this.props.subLevel, 0), 3)}>
                <Typography
                    component='h2'
                    variant={this.props.variant}
                >
                    {this.props.children}
                </Typography>
                <Space size='sm'/>
            </Indent>
        );
    }
}

SectionHeader.defaultProps = {
    subLevel: 1,
    variant: CONSTANTS.SECTION_HEADER_VARIANT
};

SectionHeader.propTypes = {
    subLevel: PropTypes.oneOf([1, 2, 3, 4]),
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2']),
    children: PropTypes.node.isRequired
};

export default withTheme(SectionHeader);