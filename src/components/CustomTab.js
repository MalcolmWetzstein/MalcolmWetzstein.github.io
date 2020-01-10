import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme, Tab } from '@material-ui/core';
import * as CONSTANTS from '../Constants';

class CustomTab extends CustomComponent
{
    render()
    {
        return React.createElement(Tab, 
            { 
                ...this.props, 
                style: 
                { 
                    'min-width': '0px',
                    padding: this.props.theme.spacing(0, CONSTANTS.UNIT_INDENT, 0, CONSTANTS.UNIT_INDENT)
                } 
            }, 
            this.props.children);
    }
}

export default withTheme(CustomTab);