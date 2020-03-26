import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withTheme } from '@material-ui/core';
import { CustomComponent, DateRange } from '../../components';

class Degree extends CustomComponent
{
    render()
    {
        return(
            <React.Fragment>
                <DateRange
                    startMonth={this.props.startMonth}
                    startYear={this.props.startYear}
                    endMonth={this.props.endMonth}
                    endYear={this.props.endYear}
                />
                <Typography variant='h6'>
                    {this.props.school}
                </Typography>
                <Typography
                    variant='subtitle2'
                    color='textSecondary'
                >
                    {this.props.city + ', ' + this.props.state}
                </Typography>
                <Typography variant='subtitle1'>
                    {this.props.degree}
                </Typography>
            </React.Fragment>    
        );
    }
}

Degree.propTypes = {
    startMonth: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).isRequired,
    startYear: PropTypes.number.isRequired,
    endMonth: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    endYear: PropTypes.number,
    school: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    children: PropTypes.oneOf([undefined, null])
};

export default withTheme(Degree);