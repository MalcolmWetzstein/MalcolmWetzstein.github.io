import React from 'react';
import { withTheme } from '@material-ui/core';
import { CustomComponent, Space, ConditionalRender } from '.';
import { ZeroOrMoreElementsPropType } from './Util';

class Timeline extends CustomComponent
{
    render()
    {
        return React.Children.map(this.props.children, (child, index) =>
            <React.Fragment>
                {child}
                <ConditionalRender condition={index < React.Children.count(this.props.children) - 1}>
                    <Space size='md'/>
                </ConditionalRender>
            </React.Fragment>
        );
    }
}

Timeline.propTypes = { children: ZeroOrMoreElementsPropType };

export default withTheme(Timeline);