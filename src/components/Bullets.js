import React from 'react';
import CustomComponent from './CustomComponent';
import { Typography, withTheme } from '@material-ui/core';
import { reKey } from './Custom';

class Bullets extends CustomComponent
{
    render()
    {
        return reKey(this.props.bullets.map(
                bullet => {
                    return (
                        <ul>
                            <li>
                                <Typography variant='body2' color={this.props.focus ? 'textPrimary' : 'textSecondary'}>
                                    {Array.isArray(bullet) ? bullet[0] : bullet}
                                </Typography>
                                {
                                    Array.isArray(bullet) ? 
                                        bullet.map((subBullet, index) => index > 0 ? 
                                            <ul>
                                                <li>
                                                    <Typography variant='body2' color='textSecondary'>
                                                        {subBullet}
                                                    </Typography>
                                                </li>
                                            </ul>
                                            : undefined)
                                        : undefined
                                }
                            </li>
                        </ul>
                    );
                }
            )
        );
    }
}

export default withTheme(Bullets);