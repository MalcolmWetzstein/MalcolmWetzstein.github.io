import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Typography } from '@material-ui/core';
import { CustomComponent, DateRange } from '../../components';
import { NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class Employment extends CustomComponent
{
    render()
    {
        return (
            <React.Fragment>
                <DateRange
                    startMonth={this.props.startMonth}
                    startYear={this.props.startYear}
                    endMonth={this.props.endMonth}
                    endYear={this.props.endYear}
                />
                <Typography variant='h6'>
                    {this.props.title}
                </Typography>
                <Typography variant='subtitle1'>
                    {this.props.company}
                </Typography>
                <Typography variant='subtitle2'>
                    {this.props.department}
                </Typography>
            </React.Fragment>
        );
    }
}

Employment.defaultProps = { department: '' };

Employment.propTypes = {
    startMonth: PropTypes.oneOf(CONSTANTS.VALID_MONTHS).isRequired,
    startYear: PropTypes.number.isRequired,
    endMonth: PropTypes.oneOf(CONSTANTS.VALID_MONTHS),
    endYear: PropTypes.number,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    department: PropTypes.string,
    children: NoChildrenPropType
};

export default withTheme(Employment);