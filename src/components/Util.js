import { cloneElement } from 'react';

function reKey(children)
{
    return children.map( (component, index) => cloneElement(component, { key: index.toString() }) );
}

function preloadImages(imageTree)
{
    for (let child of imageTree)
    {
        if (typeof child === 'string')
        {

        }
        else if (typeof child === 'object')
            preloadImages(child);
    }
}

export { reKey };