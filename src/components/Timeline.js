import React from 'react';
import { withTheme } from '@material-ui/core';
import { CustomComponent, Space } from '.';
import { ZeroOrMoreElementsPropType } from './Util';

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

Timeline.propTypes = { children: ZeroOrMoreElementsPropType };

export default withTheme(Timeline);