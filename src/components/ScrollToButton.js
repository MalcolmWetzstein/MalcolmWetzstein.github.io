import React from 'react';
import { Button } from '@material-ui/core';

export default function(targetRef, child) {
    function onClick() {
        targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }

    return (
        <Button onClick={onClick}>
            {child}
        </Button>
    );
}