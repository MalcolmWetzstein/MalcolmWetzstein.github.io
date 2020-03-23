import { cloneElement } from 'react';

function reKey(children)
{
    return children.map( (component, index) => cloneElement(component, { key: index.toString() }) );
}

function preloadImages(imageTree)
{
    for (let child of Object.values(imageTree))
    {
        if (typeof child === 'string')
        {
            const preloader = new Image();
            preloader.src = child;
        }
        else if (typeof child === 'object')
            preloadImages(child);
    }
}

export { reKey, preloadImages };