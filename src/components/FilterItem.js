import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core';
import { CustomComponent } from '.';

class FilterItem extends CustomComponent
{
    render()
    {
        let filterOut = this.props.filters.length !== 0;
        
        let filtersInTags = 0;
        for (let filter of this.props.filters)
        {
            if (this.props.tags.includes(filter))
                filtersInTags++;
        }

        if (filtersInTags === this.props.filters.length)
            filterOut = false;
        
        return filterOut ? null : this.props.children;
    }
}

export default withTheme(FilterItem);