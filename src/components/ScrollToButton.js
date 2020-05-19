import React from 'react';
import { Button } from '@material-ui/core';
import * as CONSTANTS from '../Constants';

export default function(targetRef, child)
{
    function onClick()
    {
        if (targetRef.current)
            window.scrollTo({
                behavior: 'smooth',
                top: targetRef.current.offsetTop - CONSTANTS.SPACE_SIZES['xl'] * 8,
                left: targetRef.current.offsetLeft
            });
    }

    return (
        <Button onClick={onClick}>
            {child}
        </Button>
    );
}