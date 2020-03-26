import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Container, Button } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components';
import { Portfolio } from '..';
import { PageDequePropType } from '../../components/Util';
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

Website.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: PropTypes.oneOf([undefined, null])
};

export default withTheme(Website);