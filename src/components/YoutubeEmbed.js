import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Box } from '@material-ui/core';
import { CustomComponent, ConditionalRender } from '.';
import { NoChildrenPropType } from './Util';
import * as CONSTANTS from '../Constants';

class YoutubeEmbed extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.state = { loading: true };

        this.onLoad = this.onLoad.bind(this);
    }

    render()
    {
        return (
            <div
                style={{
                    position: 'relative',
                    paddingBottom: '56.25%' /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                }}
            >
                <iframe
                    title={this.props.title}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
                    src={this.props.src}
                    frameBorder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    onLoad={this.onLoad}
                />
                <ConditionalRender condition={this.state.loading}>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        paddingBottom='56.25%'
                        paddingTop={25}
                        height={0}
                        bgcolor={CONSTANTS.YOUTUBE_LOADING_PANEL_TINT}
                    >
                        <CircularProgress color='secondary'/>
                    </Box>
                </ConditionalRender>
            </div>
        );
    }

    onLoad()
    {
        this.setState({ loading: false });
    }
}

YoutubeEmbed.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    children: NoChildrenPropType
};

export default YoutubeEmbed;