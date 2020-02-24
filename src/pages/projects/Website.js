import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme, Container, Button } from '@material-ui/core';
import { Page, Title, Suggestions, Space, NavigationButton } from '../../components/Custom';
import { Portfolio } from '../Pages';
import * as CONSTANTS from '../../Constants';

class Website extends CustomComponent {
    render() {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Title>
                    Personal Website
                </Title>
                <Space/>
                <Container maxWidth='xs'>
                    <NavigationButton label='See Project on Github'>
                        <Button href={CONSTANTS.LINKS.PORTFOLIO.WEBSITE} target='_blank'/>
                    </NavigationButton>
                </Container>
                <Space/>
                <Suggestions labels={['back']}>
                    <Portfolio/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(Website);