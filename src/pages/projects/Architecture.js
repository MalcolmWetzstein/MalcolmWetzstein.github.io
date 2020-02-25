import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme, Button, Container } from '@material-ui/core';
import { Page, Title, Suggestions, Space, NavigationButton } from '../../components/Custom';
import { Portfolio } from '../Pages';
import * as CONSTANTS from '../../Constants';

class Architecture extends CustomComponent {
    render() {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Title>
                    Architecture Design Models
                </Title>
                <Space size='lg'/>
                <Container maxWidth='xs'>
                    <NavigationButton label='See Project on Flickr'>
                        <Button href={CONSTANTS.LINKS.PORTFOLIO.INTRO_ARCH} target='_blank'/>
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

export default withTheme(Architecture);