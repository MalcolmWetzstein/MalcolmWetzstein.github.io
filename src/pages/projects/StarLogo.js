import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme, Container } from '@material-ui/core';
import { Page, Title, Suggestions, Space, YoutubeEmbed } from '../../components/Custom';
import { Portfolio } from '../Pages';
import * as CONSTANTS from '../../Constants';

class StarLogo extends CustomComponent {
    render() {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Title>
                    Master Thesis: <i>Custom and Interactive Environments in StarLogo Nova for Computational Modeling</i>
                </Title>
                <Space size='lg'/>
                <Container maxWidth='md'>
                    <YoutubeEmbed
                        title='Terrain Editor'
                        src={CONSTANTS.LINKS.PORTFOLIO.STARLOGO.EDITOR}
                    />
                    <Space size='lg'/>
                    <YoutubeEmbed
                        title='Grid-Aligned Interaction'
                        src={CONSTANTS.LINKS.PORTFOLIO.STARLOGO.YANK_GRID}
                    />
                    <Space size='lg'/>
                    <YoutubeEmbed
                        title='Unaligned Interaction'
                        src={CONSTANTS.LINKS.PORTFOLIO.STARLOGO.YANK_CONTINUOUS}
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

export default withTheme(StarLogo);