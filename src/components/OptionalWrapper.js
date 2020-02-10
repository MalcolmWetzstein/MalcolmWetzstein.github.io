import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme } from '@material-ui/core';

class OptionalWrapper extends CustomComponent {
    render() {
        return this.props.condition ? React.cloneElement(this.props.wrapper, undefined, this.props.children) : this.props.children;
    }
}

export default withTheme(OptionalWrapper);