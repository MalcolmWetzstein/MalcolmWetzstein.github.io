import React from 'react';
import { withTheme, Container } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components';
import { Portfolio } from '..';
import { PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class DesignModeling extends CustomComponent
{
    render()
    {
        return (
            <Page
                id='designModeling'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    3D Modeling & Rendering Design Project
                </PageHeader>
                <Container maxWidth='xs'>
                    <NavigationButton
                        label={CONSTANTS.SEE_ON_FLICKR_TEXT}
                        href={CONSTANTS.LINKS.PORTFOLIO.PAVILLION}
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

DesignModeling.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(DesignModeling);