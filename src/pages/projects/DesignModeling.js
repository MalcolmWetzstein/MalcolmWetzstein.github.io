import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Container, Button } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components';
import { Portfolio } from '..';
import { PageDequePropType } from '../../components/Util';
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

DesignModeling.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: PropTypes.oneOf([undefined, null])
};

export default withTheme(DesignModeling);