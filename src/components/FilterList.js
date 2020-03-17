import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme } from '@material-ui/core';

class FilterList extends CustomComponent
{
    render()
    {
        return React.Children.map(this.props.children, child => React.cloneElement(child, { filters: this.props.filters }));
    }
}

export default withTheme(FilterList);