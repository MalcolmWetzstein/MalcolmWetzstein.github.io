import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Box } from '@material-ui/core';
import { CustomComponent } from '.';
import { ZeroOrMoreElementsPropType } from './Util';

class Gallery extends CustomComponent
{
    render()
    {
        return (
            <Box
                display='flex'
                flexWrap='nowrap'
                style={{ overflowX: 'scroll' }}
            >
                {React.Children.map(this.props.children, child => React.cloneElement(child, { height: this.props.height }))}
            </Box>
        );
    }
}

Gallery.defaultProps = { height: 180 };

Gallery.propTypes = {
    height: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    children: ZeroOrMoreElementsPropType
};

export default withTheme(Gallery);