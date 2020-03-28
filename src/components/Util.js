import { cloneElement } from 'react';
import PropTypes from 'prop-types';

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

const PageDequePropType = PropTypes.shape({
    push: PropTypes.func.isRequired,
    unshift: PropTypes.func.isRequired,
    insert: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
    shift: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    top: PropTypes.func.isRequired,
    bottom: PropTypes.func.isRequired,
    pageAt: PropTypes.func.isRequired,
    swapTop: PropTypes.func.isRequired,
    swapBottom: PropTypes.func.isRequired,
    swapAt: PropTypes.func.isRequired,
    finish: PropTypes.func.isRequired,
    withDequeProps: PropTypes.func.isRequired
});

const NoChildrenPropType = PropTypes.oneOf([undefined, null]);

const ZeroOrMoreElementsPropType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]);

const OneOrMoreElementsPropType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element.isRequired), PropTypes.element]).isRequired;

export {
    reKey,
    preloadImages,
    PageDequePropType,
    NoChildrenPropType,
    ZeroOrMoreElementsPropType,
    OneOrMoreElementsPropType
};