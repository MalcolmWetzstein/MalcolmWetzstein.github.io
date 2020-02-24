import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme, Container } from '@material-ui/core';
import { Page, Title, Suggestions, Space } from '../../components/Custom';
import { Portfolio } from '../Pages';
import * as CONSTANTS from '../../Constants';

class ARVoxel extends CustomComponent {
    render() {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Title>
                    Augmented Reality Voxel Building Game
                </Title>
                <Space/>
                <Container maxWidth='md'>
                    <div
                        className="video"
                        style={{
                            position: "relative",
                            paddingBottom: "56.25%" /* 16:9 */,
                            paddingTop: 25,
                            height: 0
                        }}
                        >
                        <iframe
                            title='Augmented Reality Voxel Building Game'
                            style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                            }}
                            src={CONSTANTS.LINKS.PORTFOLIO.AR_GAME}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="true"
                        />
                    </div>
                </Container>
                <Space/>
                <Suggestions labels={['back']}>
                    <Portfolio/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(ARVoxel);