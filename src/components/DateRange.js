import React from 'react';
import CustomComponent from './CustomComponent';
import { Typography, withTheme } from '@material-ui/core';

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

export default withTheme(DateRange);