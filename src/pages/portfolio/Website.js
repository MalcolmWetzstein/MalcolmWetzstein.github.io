import React from 'react';
import { withTheme, Container, Button } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components';
import { Portfolio } from '..';
import { PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class Website extends CustomComponent
{
    render()
    {
        return (
            <Page
                id='website'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    Personal Website
                </PageHeader>
                <Container maxWidth='xs'>
                    <NavigationButton label={CONSTANTS.SEE_ON_GITHUB_TEXT}>
                        <Button
                            href={CONSTANTS.LINKS.PORTFOLIO.WEBSITE}
                            target='_blank'
                        />
                    </NavigationButton>
                </Container>
                <Space size='lg'/>
                <Suggestions labels={[CONSTANTS.BACK_BUTTON_TEXT]}>
                    <Portfolio/>
                </Suggestions>
            </Page>
        );
    }
}

Website.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(Website);