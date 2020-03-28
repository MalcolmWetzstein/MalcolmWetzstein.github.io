import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Grid, Tooltip, Chip } from '@material-ui/core';
import { CustomComponent } from '../../components';
import { NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class Skill extends CustomComponent
{
    render()
    {
        return (
            <Grid item>
                <Tooltip title={CONSTANTS.SKILL_TOOLTIPS[this.props.level]}>
                    <Chip
                        label={this.props.label}
                        style={{ backgroundColor: CONSTANTS.SKILL_COLORS[this.props.level] }}
                    />
                </Tooltip>
            </Grid>
        );
    }
}

Skill.propTypes = {
    label: PropTypes.string.isRequired,
    level: PropTypes.oneOf(['beginner', 'intermediate', 'advanced', 'expert']).isRequired,
    children: NoChildrenPropType
};

export default withTheme(Skill);