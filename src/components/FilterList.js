import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core';
import { CustomComponent } from '.';

class FilterList extends CustomComponent
{
    render()
    {
        return React.Children.map(this.props.children, child => React.cloneElement(child, { filters: this.props.filters }));
    }
}

export default withTheme(FilterList);