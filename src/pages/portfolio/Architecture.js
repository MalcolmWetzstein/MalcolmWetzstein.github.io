import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Button, Container } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components';
import { Portfolio } from '..';
import { PageDequePropType } from '../../components/Util';
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

Architecture.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: PropTypes.oneOf([undefined, null])
};

export default withTheme(Architecture);