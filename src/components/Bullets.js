import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withTheme } from '@material-ui/core';
import { CustomComponent } from '.';
import { reKey } from './Util';

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
                                    {Array.isArray(bullet) ? bullet[0] : bullet}
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
    bullets: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])),
    focus: PropTypes.bool,
    children: PropTypes.oneOf([undefined, null])
};

export default withTheme(Bullets);