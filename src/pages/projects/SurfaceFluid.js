import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme, Container, Button } from '@material-ui/core';
import { Page, Title, Suggestions, Space, NavigationButton } from '../../components/Custom';
import { Portfolio } from '../Pages';
import * as CONSTANTS from '../../Constants';

class SurfaceFluid extends CustomComponent {
    render() {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Title>
                    Surface Fluid Flow via Mesh Parameterization
                </Title>
                <Space size='lg'/>
                <Container maxWidth='xs'>
                    <NavigationButton label='See Project on Github'>
                        <Button href={CONSTANTS.LINKS.PORTFOLIO.SURFACE_FLUID} target='_blank'/>
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

export default withTheme(SurfaceFluid);