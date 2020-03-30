import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withTheme } from '@material-ui/core';
import { CustomComponent, ConditionalRender } from '.';
import { reKey, NoChildrenPropType } from './Util';

class Bullets extends CustomComponent
{
    render()
    {
        if (!this.props.bullets)
            return null;

        return reKey(this.props.bullets.map(
                bullet => {
                    return (
                        <ul>
                            <li>
                                <Typography
                                    variant='body2'
                                    color={this.props.focus ? 'textPrimary' : 'textSecondary'}
                                >
                                    <ConditionalRender
                                        condition={Array.isArray(bullet)}
                                        alt={bullet}
                                    >
                                        {bullet[0]}
                                    </ConditionalRender>
                                </Typography>
                                {
                                    Array.isArray(bullet) ? 
                                        reKey(bullet.slice(1).map(subBullet => 
                                            <ul>
                                                <li>
                                                    <Typography
                                                        variant='body2'
                                                        color='textSecondary'
                                                    >
                                                        {subBullet}
                                                    </Typography>
                                                </li>
                                            </ul>
                                        )) : undefined
                                }
                            </li>
                        </ul>
                    );
                }
            )
        );
    }
}

Bullets.propTypes = {
    bullets: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])),
    focus: PropTypes.bool,
    children: NoChildrenPropType
};

export default withTheme(Bullets);