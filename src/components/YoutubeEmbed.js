import React from 'react';
import { CircularProgress, Box } from '@material-ui/core';
import { CustomComponent } from '.';

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
                {
                    this.state.loading ? (
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            paddingBottom='56.25%'
                            paddingTop={25}
                            height={0}
                            bgcolor='rgba(0, 0, 0, 0.1)'
                        >
                            <CircularProgress color='secondary'/>
                        </Box>
                    ) : undefined
                }
            </div>
        );
    }

    onLoad()
    {
        this.setState({ loading: false });
    }
}

export default YoutubeEmbed;