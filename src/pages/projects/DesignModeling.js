import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme, Container, Button } from '@material-ui/core';
import { Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components/Custom';
import { Portfolio } from '../Pages';
import * as CONSTANTS from '../../Constants';

class DesignModeling extends CustomComponent {
    render() {
        return (
            <Page
                id='designModeling'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    3D Modeling & Rendering Design Project
                </PageHeader>
                <Container maxWidth='xs'>
                    <NavigationButton label='See Project on Flickr'>
                        <Button
                            href={CONSTANTS.LINKS.PORTFOLIO.PAVILLION}
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

export default withTheme(DesignModeling);