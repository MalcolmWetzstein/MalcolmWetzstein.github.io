import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core';
import { CustomComponent } from '.';

class ConditionalWrapper extends CustomComponent
{
    render()
    {
        if (this.props.condition)
            return React.cloneElement(this.props.wrapper, undefined, this.props.children);
        else if (this.props.alt)
            return React.cloneElement(this.props.alt, undefined, this.props.children);
        else
            return this.props.children;
    }
}

ConditionalWrapper.propTypes = {
    condition: PropTypes.any,
    wrapper: PropTypes.element.isRequired,
    alt: PropTypes.element,
    children: PropTypes.node
};

export default withTheme(ConditionalWrapper);