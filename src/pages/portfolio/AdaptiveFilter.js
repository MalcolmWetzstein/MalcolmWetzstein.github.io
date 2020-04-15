import React from 'react';
import { withTheme, Container, Typography, Button } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton } from '../../components';
import { Portfolio, Education } from '..';
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
                maxWidth='md'
            >
                <PageHeader>
                    Implementation of <i>Adaptive Manifolds for Real-Time High-Dimensional Filtering</i>
                </PageHeader>
                <Typography>
                    For my class project in <i>Computational Photography</i> I implemented the technique described in the 
                    paper <i>Adaptive Manifolds for Real-Time High-Dimensional Filtering</i> by E. Gastal and M. Oliveira. 
                    The technique performs fast high-dimensional filtering over images and video allowing many kinds of complex 
                    denoising algorithms to be applied in real-time. More about my <i>Computational Photography</i> course 
                    can be found under <b>Education</b>
                </Typography>
                <Space size='sm'/>
                <Container maxWidth='xs'>
                    <NavigationButton
                        label={CONSTANTS.SEE_ON_GITHUB_TEXT}
                        href={CONSTANTS.LINKS.PORTFOLIO.MANIFOLDS_FILTER.PROJECT}
                        variant='outlined'
                    />
                </Container>
                <Space size='sm'/>
                <Typography>
                    {/* Explaination */}
                </Typography>
                {/* Images of demos with captions (manifold tree, blurring, denoising, depth of field) */}
                <Space size='lg'/>
                <Suggestions labels={[
                        'Gastal et al',
                        Education.displayText,
                        CONSTANTS.BACK_BUTTON_TEXT
                    ]}
                >
                    <Button
                        href={CONSTANTS.LINKS.PORTFOLIO.MANIFOLDS_FILTER.ORIGINAL}
                        target='_blank'
                    />
                    <Education/>
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