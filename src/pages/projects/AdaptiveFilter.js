import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme, Button, Container } from '@material-ui/core';
import { Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components/Custom';
import { Portfolio } from '../Pages';
import * as CONSTANTS from '../../Constants';

class AdaptiveFilter extends CustomComponent {
    render() {
        return (
            <Page pageDeque={this.props.pageDeque}>
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