import React from 'react';
import { preloadImages } from './Util';

class Preloader extends React.Component
{
    componentDidMount()
    {
        if (this.props.imageTree)
            preloadImages(this.props.imageTree);
    }

    render()
    {
        return null;
    }
}

export default Preloader;