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
                    Simple image filters like the Gaussian Blur operate in two dimensions, the x and y dimensions of the image. These kinds of filters are called spatial, or linear, 
                    filters; a pre-computation step can be used to speed up evaluation of the filter. High-dimensional, or non-linear, filters operate in three or more dimensions on 
                    images, where each additional dimension is associated with a pixel value. The bilateral filter is a 5D filter where RGB color values correspond to the three 
                    additional dimensions. Because they depend on values at each pixel, pre-computation cannot be used to speed up evaluation of the filter and the entire image must 
                    be looped over once per pixel in order to evaluate the filter at that pixel.
                </Typography>
                <Space size='xs'/>
                <Typography>
                    Instead of trying to evaluate a high-dimensional filter over a two dimensional image, the algorithm presented 
                    in <i>Adaptive Manifolds for Real-Time High-Dimensional Filtering</i> computes a series of manifolds, surfaces in high-dimensional space, where applying the 
                    filter is equivalent to performing a Gaussian Blur over the surface of the manifold. Unlike images, which are flat surfaces, manifolds can be curved surfaces. 
                    The manifolds are represented by a collection of points on its surface, one per a pixel in the original image. By taking into account the curvature of a 
                    manifold, a Gaussian Blur can be approximated in a single loop over the points on the manifold. The blurred manifolds can then be sampled to obtain an 
                    approximation of the filtered image.
                </Typography>
                <Space size='xs'/>
                <Typography>
                    QUALITY OF THE APPROXIMATION DEPENDS ON THE MANIFOLDS
                </Typography>
                <Space size='sm'/>
                {/* Images of manifold tree */}
                <Space size='md'/>
                <Typography>
                    {/* Explaination of blurring */}
                </Typography>
                <Space size='sm'/>
                {/* Images of blurring */}
                <Space size='md'/>
                <Typography>
                    {/* Explaination of denoising */}
                </Typography>
                <Space size='sm'/>
                {/* Images of denoising */}
                <Space size='md'/>
                <Typography>
                    {/* Explaination of depth of field */}
                </Typography>
                <Space size='sm'/>
                {/* Images of depth of field */}
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