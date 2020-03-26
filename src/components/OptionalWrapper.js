import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core';
import { CustomComponent } from '.';

class OptionalWrapper extends CustomComponent
{
    render()
    {
        return this.props.condition ? React.cloneElement(this.props.wrapper, undefined, this.props.children) : this.props.children;
    }
}

OptionalWrapper.propTypes = {
    condition: PropTypes.any,
    wrapper: PropTypes.element.isRequired,
    children: PropTypes.node
};

export default withTheme(OptionalWrapper);