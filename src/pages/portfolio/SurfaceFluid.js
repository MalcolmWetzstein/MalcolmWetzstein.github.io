import React from 'react';
import { withTheme, Container } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components';
import { Portfolio } from '..';
import { PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class SurfaceFluid extends CustomComponent
{
    render()
    {
        return (
            <Page
                id='surfaceFluid'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    Surface Fluid Flow via Mesh Parameterization
                </PageHeader>
                <Container maxWidth='xs'>
                    <NavigationButton
                        label={CONSTANTS.SEE_ON_GITHUB_TEXT}
                        href={CONSTANTS.LINKS.PORTFOLIO.SURFACE_FLUID}
                    />
                </Container>
                <Space size='lg'/>
                <Suggestions labels={[CONSTANTS.BACK_BUTTON_TEXT]}>
                    <Portfolio/>
                </Suggestions>
            </Page>
        );
    }
}

SurfaceFluid.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(SurfaceFluid);