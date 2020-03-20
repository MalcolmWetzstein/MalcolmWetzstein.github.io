import React from 'react';
import { withTheme, Button, Container } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components';
import { Portfolio } from '..';
import * as CONSTANTS from '../../Constants';

class AdaptiveFilter extends CustomComponent {
    render() {
        return (
            <Page
                id='adaptiveFilter'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    Implementation of <i>Adaptive Manifolds for Real-Time High-Dimensional Filtering</i>
                </PageHeader>
                <Container maxWidth='xs'>
                    <NavigationButton label='See Project on Github'>
                        <Button
                            href={CONSTANTS.LINKS.PORTFOLIO.MANIFOLDS_FILTER}
                            target='_blank'
                        />
                    </NavigationButton>
                </Container>
                <Space size='lg'/>
                <Suggestions labels={['back']}>
                    <Portfolio/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(AdaptiveFilter);