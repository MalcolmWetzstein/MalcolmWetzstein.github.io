import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme, Container } from '@material-ui/core';
import { Page, Title, Suggestions, Space, YoutubeEmbed } from '../../components/Custom';
import { Portfolio } from '../Pages';
import * as CONSTANTS from '../../Constants';

class ARVoxel extends CustomComponent {
    render() {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Title>
                    Augmented Reality Voxel Building Game
                </Title>
                <Space size='lg'/>
                <Container maxWidth='md'>
                    <YoutubeEmbed
                        title='Augmented Reality Voxel Building Game'
                        src={CONSTANTS.LINKS.PORTFOLIO.AR_GAME}
                    />
                </Container>
                <Space size='lg'/>
                <Suggestions labels={['back']}>
                    <Portfolio/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(ARVoxel);