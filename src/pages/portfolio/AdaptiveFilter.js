import React from 'react';
import { withTheme, Container } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components';
import { Portfolio } from '..';
import { PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class AdaptiveFilter extends CustomComponent
{
    render()
    {
        return (
            <Page
                id='adaptiveFilter'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    Implementation of <i>Adaptive Manifolds for Real-Time High-Dimensional Filtering</i>
                </PageHeader>
                <Container maxWidth='xs'>
                    <NavigationButton
                        label={CONSTANTS.SEE_ON_GITHUB_TEXT}
                        href={CONSTANTS.LINKS.PORTFOLIO.MANIFOLDS_FILTER}
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

AdaptiveFilter.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(AdaptiveFilter);