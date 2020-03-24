import { cloneElement } from 'react';

function reKey(children)
{
    return children.map( (component, index) => cloneElement(component, { key: index.toString() }) );
}

const imageCache = {};
function preloadImages(imageTree)
{
    for (let node of Object.values(imageTree))
    {
        if (typeof node === 'string')
        {
            if (imageCache[node] == null)
            {
                imageCache[node] = new Image();
                imageCache[node].src = node;
            }
        }
        else if (typeof node === 'object')
            preloadImages(node);
    }
}

export { reKey, preloadImages };