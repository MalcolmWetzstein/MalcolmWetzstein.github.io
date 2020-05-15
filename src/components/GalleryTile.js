import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Box, Typography } from '@material-ui/core';
import { CustomComponent, Image, ConditionalRender, ConditionalWrapper } from '.';
import { NoChildrenPropType } from './Util';
import * as CONSTANTS from '../Constants';

class GalleryTile extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.imageRef = React.createRef();
        this.textRef = React.createRef();

        this.onLoad = this.onLoad.bind(this);
    }

    render()
    {
        let width = this.props.height;
        if (this.imageRef.current != null && this.props.height)
            width = Math.floor(this.imageRef.current.naturalWidth * this.props.height / this.imageRef.current.naturalHeight);

        let captionHeight = this.props.theme.spacing(CONSTANTS.CAPTION_FULLSCREEN_MARGIN * 2 + 3);
        if (this.textRef.current)
            captionHeight = this.props.theme.spacing(CONSTANTS.CAPTION_FULLSCREEN_MARGIN * 2) + this.textRef.current.clientHeight;
            
        return (
            <ConditionalWrapper
                condition={!this.props.fullScreen}
                wrapper={
                    <Box
                        width={width}
                        height={this.props.height}
                    />
                }
            >
                <Image
                    src={this.props.image}
                    alt={this.props.label}
                    width={this.props.fullScreen ? 1 : width}
                    height={this.props.fullScreen ? window.innerHeight - captionHeight + 'px' : this.props.height}
                    objectFit={this.props.fullScreen ? undefined : 'fill'}
                    onClick={this.props.onClick}
                    cursor={this.props.fullScreen ? undefined : 'zoom-in'}
                    imageRendering={this.props.imageRendering}
                    imgRef={this.imageRef}
                    onLoad={this.onLoad}
                />
                <ConditionalRender condition={this.props.caption}>
                    <ConditionalWrapper
                        condition={this.props.fullScreen}
                        wrapper={
                            <Box
                                margin='0 auto'
                                padding={this.props.theme.spacing(CONSTANTS.CAPTION_FULLSCREEN_MARGIN, 0, CONSTANTS.CAPTION_FULLSCREEN_MARGIN, 0)}
                                maxWidth={this.props.theme.breakpoints.values.md}
                            />
                        }
                        alt={
                            <Box
                                position='absolute'
                                left={this.imageRef.current ? this.imageRef.current.offsetLeft : undefined}
                                bottom={0}
                                width={this.imageRef.current ? this.imageRef.current.clientWidth : undefined}
                                padding={this.props.theme.spacing(0, CONSTANTS.CAPTION_PADDING_SIZE, 0, CONSTANTS.CAPTION_PADDING_SIZE)}
                                bgcolor='rgba(0, 0, 0, 0.5)'
                            />
                        }
                    >
                        <Typography
                            variant={this.props.fullScreen ? 'body1' : 'caption'}
                            ref={this.textRef}
                        >
                            {this.props.caption}
                        </Typography>
                    </ConditionalWrapper>
                </ConditionalRender>
            </ConditionalWrapper>
        );
    }

    onLoad()
    {
        this.forceUpdate();
        if (this.props.onTileLoad)
            this.props.onTileLoad();
    }
}

GalleryTile.defaultProps = { label: '' };

GalleryTile.propTypes = {
    image: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    label: PropTypes.string,
    caption: PropTypes.string,
    imageRendering: PropTypes.string,
    children: NoChildrenPropType
};

export default withTheme(GalleryTile);