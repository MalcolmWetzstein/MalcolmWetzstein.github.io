import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Tab } from '@material-ui/core';
import { CustomComponent } from '.';
import * as CONSTANTS from '../Constants';

class CustomTab extends CustomComponent
{
    render()
    {
        const propsCopy = Object.assign({}, this.props);
        delete propsCopy.sparse;

        return React.createElement(Tab, 
            { 
                ...propsCopy, 
                style: 
                { 
                    'minWidth': '0px',
                    padding: this.props.sparse ? undefined : this.props.theme.spacing(0, CONSTANTS.TAB_MARGIN, 0, CONSTANTS.TAB_MARGIN)
                } 
            }, 
            this.props.children);
    }
}

// CustomTab.propTypes = {
//     sparse: PropTypes.bool,
//     theme: PropTypes.object.isRequired,
//     children: PropTypes.node
// };

export default withTheme(CustomTab);