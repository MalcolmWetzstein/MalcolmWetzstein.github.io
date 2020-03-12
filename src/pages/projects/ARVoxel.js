import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme, Container } from '@material-ui/core';
import { Page, PageHeader, Suggestions, Space, YoutubeEmbed } from '../../components/Custom';
import { Portfolio } from '../Pages';
import * as CONSTANTS from '../../Constants';

class ARVoxel extends CustomComponent {
    render() {
        return (
            <Page
                id='arVoxel'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    Augmented Reality Voxel Building Game
                </PageHeader>
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