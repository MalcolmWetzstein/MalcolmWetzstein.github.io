import { cloneElement } from 'react';

function reKey(children)
{
    return children.map( (component, index) => cloneElement(component, { key: index.toString() }) );
}

export { reKey };