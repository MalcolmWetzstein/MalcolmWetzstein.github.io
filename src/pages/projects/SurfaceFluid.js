import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme } from '@material-ui/core';
import { Page, Partition, Title, Suggestions } from '../../components/Custom';
import { Portfolio } from '../Pages';

class SurfaceFluid extends CustomComponent {
    render() {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center maxWidth='lg'>
                    <Title>
                        Surface Fluid Flow via Mesh Parameterization
                    </Title>
                    <Suggestions labels={['back']}>
                        <Portfolio/>
                    </Suggestions>
                </Partition>
            </Page>
        );
    }
}

export default withTheme(SurfaceFluid);