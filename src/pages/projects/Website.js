import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme, Container, Button } from '@material-ui/core';
import { Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components/Custom';
import { Portfolio } from '../Pages';
import * as CONSTANTS from '../../Constants';

class Website extends CustomComponent {
    render() {
        return (
            <Page
                id='website'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    Personal Website
                </PageHeader>
                <Container maxWidth='xs'>
                    <NavigationButton label='See Project on Github'>
                        <Button
                            href={CONSTANTS.LINKS.PORTFOLIO.WEBSITE}
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

export default withTheme(Website);