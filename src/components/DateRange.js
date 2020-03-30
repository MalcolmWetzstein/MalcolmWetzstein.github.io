import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withTheme } from '@material-ui/core';
import { CustomComponent, ConditionalRender } from '.';
import { NoChildrenPropType } from './Util';
import * as CONSTANTS from '../Constants';

class DateRange extends CustomComponent
{
    render()
    {
        return (
            <Typography
                variant='subtitle2'
                color='textSecondary'
            >
                {this.renderDate(this.props.startMonth, this.props.startYear)}
                &mdash;
                <ConditionalRender
                    condition={this.props.endMonth && this.props.endYear}
                    alt='Present'
                >
                    {this.renderDate(this.props.endMonth, this.props.endYear)}
                </ConditionalRender>
            </Typography>
        );
    }

    renderDate(month, year)
    {
        return (month < 10 ? '0' + month : month) + '-' + year;
    }
}

DateRange.propTypes = {
    startMonth: PropTypes.oneOf(CONSTANTS.VALID_MONTHS).isRequired,
    startYear: PropTypes.number.isRequired,
    endMonth: PropTypes.oneOf(CONSTANTS.VALID_MONTHS),
    endYear: PropTypes.number,
    children: NoChildrenPropType
};

export default withTheme(DateRange);