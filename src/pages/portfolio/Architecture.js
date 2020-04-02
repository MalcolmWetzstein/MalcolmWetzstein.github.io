import React from 'react';
import { withTheme, Container } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components';
import { Portfolio } from '..';
import { PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class Architecture extends CustomComponent
{
    render()
    {
        return (
            <Page
                id='architecture'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    Architecture Design Models
                </PageHeader>
                <Container maxWidth='xs'>
                    <NavigationButton
                        label={CONSTANTS.SEE_ON_FLICKR_TEXT}
                        href={CONSTANTS.LINKS.PORTFOLIO.INTRO_ARCH}
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

Architecture.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(Architecture);