import React from 'react';
import CustomComponent from './CustomComponent';

class YoutubeEmbed extends CustomComponent {
    render() {
        return (
            <div
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                }}
                >
                <iframe
                    title={this.props.title}
                    style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                    }}
                    src={this.props.src}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }
}

export default YoutubeEmbed;