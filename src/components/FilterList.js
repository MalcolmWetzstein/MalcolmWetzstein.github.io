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

FilterList.defaultProps = { filters: [] };

FilterList.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
};

export default withTheme(FilterList);