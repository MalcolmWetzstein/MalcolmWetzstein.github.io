import React from 'react';
import CustomComponent from './CustomComponent';
import { withTheme } from '@material-ui/core';
import { Space } from './Custom';

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