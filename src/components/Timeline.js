import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core';
import { CustomComponent, Space } from '.';

class Timeline extends CustomComponent
{
    render()
    {
        return React.Children.map(this.props.children,
            (child, index) => 
                index < React.Children.count(this.props.children) - 1 ?
                    <React.Fragment>
                        {child}
                        <Space size='md'/>
                    </React.Fragment>
                    : child
        );
    }
}

export default withTheme(Timeline);