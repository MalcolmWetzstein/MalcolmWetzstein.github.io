import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withTheme } from '@material-ui/core';
import { CustomComponent } from '.';

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
                {(this.props.endMonth && this.props.endYear) ? this.renderDate(this.props.endMonth, this.props.endYear) : 'Present'}
            </Typography>
        );
    }

    renderDate(month, year)
    {
        return (month < 10 ? '0' + month : month) + '-' + year;
    }
}

const validMonths = [];
for (let i = 1; i <= 12; i++)
    validMonths.push(i);

DateRange.propTypes = {
    startMonth: PropTypes.oneOf(validMonths).isRequired,
    startYear: PropTypes.number.isRequired,
    endMonth: PropTypes.oneOf(validMonths),
    endYear: PropTypes.number,
    children: PropTypes.oneOf([undefined, null])
};

export default withTheme(DateRange);