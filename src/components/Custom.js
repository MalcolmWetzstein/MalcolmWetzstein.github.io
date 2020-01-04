import React from 'react';
import Indent from './Indent';
import NavigationBar from './NavigationBar';
import Page from './Page';
import PageDeque from './PageDeque';
import Partition from './Partition';
import Suggestions from './Suggestions';
import Columns from './Columns';
import Group from './Group';
import Space from './Space';
import IconLink from './IconLink';

import { Typography } from '@material-ui/core';

function reKey(children)
{
    return children.map( (component, index) => React.cloneElement(component, { key: index.toString() }) );
}

function renderDate(month, year)
{
    return (month < 10 ? '0' + month : month) + '-' + year;
}

function renderDateRange(startMonth, startYear, endMonth, endYear)
{
    return (
        <Typography variant='subtitle2' color='textSecondary'>
            {renderDate(startMonth, startYear)}
            &mdash;
            {(endMonth && endYear) ? renderDate(endMonth, endYear) : 'Present'}
        </Typography>
    );
}

export { Indent, NavigationBar, Page, PageDeque, Partition, Suggestions, Columns, Group, Space, IconLink, reKey, renderDate, renderDateRange };