import React from 'react';
import PropTypes from 'prop-types';
import { preloadImages, NoChildrenPropType } from './Util';

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
    children: NoChildrenPropType
};

export default Preloader;