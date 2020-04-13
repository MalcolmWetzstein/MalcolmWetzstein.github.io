import React from 'react';
import { withTheme, Container, Typography } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components';
import { Portfolio } from '..';
import { PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class AdaptiveFilter extends CustomComponent
{
    render()
    {
        return (
            <Page
                id='adaptiveFilter'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    Implementation of <i>Adaptive Manifolds for Real-Time High-Dimensional Filtering</i>
                </PageHeader>
                <Typography>
                    For my class project in <i>Computational Photography</i> I implemented the technique described in the 
                    paper <i>Adaptive Manifolds for Real-Time High-Dimensional Filtering</i> (Eduardo S. L. Gastal and Manuel M. Oliveira). The technique performs
                    fast high-dimensional filtering over images and video allowing many kinds of complex denoising algorithms to be applied in real-time. 
                </Typography>
                <Space size='sm'/>
                <Container maxWidth='xs'>
                    <NavigationButton
                        label={CONSTANTS.SEE_ON_GITHUB_TEXT}
                        href={CONSTANTS.LINKS.PORTFOLIO.MANIFOLDS_FILTER}
                    />
                    {/* Report */}
                </Container>
                <Space size='sm'/>
                <Typography>
                    {/* Explaination */}
                </Typography>
                <Space size='sm'/>
                <Suggestions>
                    {/* Original Paper */}
                </Suggestions>
                {/* Images of demos with captions (manifold tree, blurring, denoising, depth of field) */}
                <Space size='lg'/>
                <Suggestions labels={[CONSTANTS.BACK_BUTTON_TEXT]}>
                    <Portfolio/>
                </Suggestions>
            </Page>
        );
    }
}

AdaptiveFilter.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(AdaptiveFilter);