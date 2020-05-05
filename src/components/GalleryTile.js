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
    }

    render()
    {
        return (
            <React.Fragment>
                <Image
                    src={this.props.image}
                    alt={this.props.label}
                    width={this.props.fullScreen ? 1 : undefined}
                    height={this.props.height}
                    objectFit={this.props.fullScreen ? undefined : 'cover'}
                    onClick={this.props.onClick}
                    imgRef={this.imageRef}
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
                        <Typography variant={this.props.fullScreen ? 'body1' : 'caption'}>
                            {this.props.caption}
                        </Typography>
                    </ConditionalWrapper>
                </ConditionalRender>
            </React.Fragment>
        );
    }
}

GalleryTile.defaultProps = { label: '' };

GalleryTile.propTypes = {
    image: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    label: PropTypes.string,
    caption: PropTypes.string,
    children: NoChildrenPropType
};

export default withTheme(GalleryTile);