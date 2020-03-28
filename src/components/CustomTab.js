import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Tab } from '@material-ui/core';
import { CustomComponent } from '.';
import { NoChildrenPropType } from './Util';
import * as CONSTANTS from '../Constants';

class CustomTab extends CustomComponent
{
    render()
    {
        const propsCopy = Object.assign({}, this.props);
        delete propsCopy.sparse;
        
        return React.createElement(Tab, { 
            ...propsCopy, 
            style: { 
                minWidth: 0,
                padding: this.props.sparse ? undefined : this.props.theme.spacing(0, CONSTANTS.TAB_MARGIN, 0, CONSTANTS.TAB_MARGIN)
            }
        });
    }
}

CustomTab.propTypes = {
    sparse: PropTypes.bool,
    theme: PropTypes.object.isRequired,
    children: NoChildrenPropType,
    // Material UI Tab props
    classes: PropTypes.object,
    disabled: PropTypes.any,
    disableFocusRipple: PropTypes.bool,
    disableRipple: PropTypes.bool,
    icon: PropTypes.node,
    label: PropTypes.node,
    value: PropTypes.any,
    wrapped: PropTypes.bool,
    // Material UI ButtonBase props
    action: PropTypes.any,
    centerRipple: PropTypes.bool,
    disableTouchRipple: PropTypes.bool,
    focusRipple: PropTypes.bool,
    focusVisibleClassName: PropTypes.string,
    onFocusVisible: PropTypes.func,
    TouchRippleProps: PropTypes.object,
    type: PropTypes.oneOf(['submit', 'reset', 'button']),
    component: PropTypes.string
};

export default withTheme(CustomTab);