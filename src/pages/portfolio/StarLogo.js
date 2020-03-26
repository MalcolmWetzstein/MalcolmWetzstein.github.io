import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Container } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, YoutubeEmbed } from '../../components';
import { Portfolio } from '..';
import { PageDequePropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class StarLogo extends CustomComponent {
    render() {
        return (
            <Page
                id='starLogo'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    Master Thesis: <i>Custom and Interactive Environments in StarLogo Nova for Computational Modeling</i>
                </PageHeader>
                <Container maxWidth='md'>
                    <YoutubeEmbed
                        title='Terrain Editor'
                        src={CONSTANTS.VIDEO.PORTFOLIO.STARLOGO.EDITOR}
                    />
                    <Space size='lg'/>
                    <YoutubeEmbed
                        title='Grid-Aligned Interaction'
                        src={CONSTANTS.VIDEO.PORTFOLIO.STARLOGO.YANK_GRID}
                    />
                    <Space size='lg'/>
                    <YoutubeEmbed
                        title='Unaligned Interaction'
                        src={CONSTANTS.VIDEO.PORTFOLIO.STARLOGO.YANK_CONTINUOUS}
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

StarLogo.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: PropTypes.oneOf([undefined, null])
};

export default withTheme(StarLogo);