import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme, Button, Container } from '@material-ui/core';
import { Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components/Custom';
import { Portfolio } from '../Pages';
import * as CONSTANTS from '../../Constants';

class Architecture extends CustomComponent {
    render() {
        return (
            <Page
                id='architecture'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    Architecture Design Models
                </PageHeader>
                <Container maxWidth='xs'>
                    <NavigationButton label='See Project on Flickr'>
                        <Button
                            href={CONSTANTS.LINKS.PORTFOLIO.INTRO_ARCH}
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

export default withTheme(Architecture);