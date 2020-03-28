import React from 'react';
import { withTheme, Container } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, YoutubeEmbed } from '../../components';
import { Portfolio } from '..';
import { PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class ARVoxel extends CustomComponent
{
    render()
    {
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
                        src={CONSTANTS.VIDEO.PORTFOLIO.AR_GAME}
                    />
                </Container>
                <Space size='lg'/>
                <Suggestions labels={[CONSTANTS.BACK_BUTTON_TEXT]}>
                    <Portfolio/>
                </Suggestions>
            </Page>
        );
    }
}

ARVoxel.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(ARVoxel);