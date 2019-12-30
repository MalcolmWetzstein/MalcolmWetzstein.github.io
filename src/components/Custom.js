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

function reKey(children)
{
    return children.map( (component, index) => React.cloneElement(component, { key: index.toString() }) );
}

export { Indent, NavigationBar, Page, PageDeque, Partition, Suggestions, Columns, Group, Space, IconLink, reKey };