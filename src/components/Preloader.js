import React from 'react';
import PropTypes from 'prop-types';
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

Preloader.propTypes = {
    imageTree: PropTypes.object,
    children: PropTypes.oneOf([undefined, null])
};

export default Preloader;