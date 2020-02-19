import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme } from '@material-ui/core';
import { Page, Title, Suggestions, Space } from '../../components/Custom';
import { Portfolio } from '../Pages';

class SurfaceFluid extends CustomComponent {
    render() {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Title>
                    Surface Fluid Flow via Mesh Parameterization
                </Title>
                <Space/>
                <Suggestions labels={['back']}>
                    <Portfolio/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(SurfaceFluid);