import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Box } from '@material-ui/core';
import { CustomComponent, ConditionalRender } from '.';
import { NoChildrenPropType } from './Util';
import * as CONSTANTS from '../Constants';

class GoogleSlidesEmbed extends CustomComponent
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
                    paddingTop: '56.25%' /* 16:9 */,
                    paddingBottom: CONSTANTS.GOOGLE_SLIDES_CONTROLS_PADDING,
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
                    allowFullScreen
                    onLoad={this.onLoad}
                />
                <ConditionalRender condition={this.state.loading}>
                    <Box
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        paddingTop='56.25%'
                        paddingBottom={CONSTANTS.GOOGLE_SLIDES_CONTROLS_PADDING}
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

GoogleSlidesEmbed.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    children: NoChildrenPropType
};

export default GoogleSlidesEmbed;
                