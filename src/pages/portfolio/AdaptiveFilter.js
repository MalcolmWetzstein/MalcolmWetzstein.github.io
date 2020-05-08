import React from 'react';
import { withTheme, Container, Typography, Button } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton, Gallery, GalleryTile } from '../../components';
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
                    For my class project in <i>Computational Photography</i> I implemented the technique described by the 
                    paper <i>Adaptive Manifolds for Real-Time High-Dimensional Filtering</i> by E. Gastal and M. Oliveira. 
                    The technique performs fast high-dimensional filtering over images and video, allowing many kinds of complex 
                    denoising algorithms to be applied in real-time. Also, as an extension of their technique, I apply it to implementing a
                    depth of field a post-process. More about my <i>Computational Photography</i> course can be found under <b>Education</b>
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
                    filters; a pre-computation step can be used to speed up evaluation of the filter. High-dimensional, or non-linear, filters operate on images in three or more 
                    dimensions, where each additional dimension is associated with a pixel value. The bilateral filter is a 5D filter where RGB color values correspond to the three 
                    additional dimensions. Because high-dimensional filters depend on values at each pixel, pre-computation cannot be used to speed up evaluation of the filter. Since
                    filters generally require a double loop over all pixels in an image to evaluate, the amount of computation required to evaluate high-dimensional filters is beyond 
                    the capablities of real-time applications. 
                </Typography>
                <Space size='xs'/>
                <Typography>
                    Instead of trying to evaluate a high-dimensional filter over the image, the algorithm presented 
                    in <i>Adaptive Manifolds for Real-Time High-Dimensional Filtering</i> computes a series of manifolds, surfaces in high-dimensional space, where 
                    applying the filter is equivalent to evaluating a 2D spatial filter over the surface of the manifold. Each manifold is represented by a collection 
                    of points, one per a pixel in the original image, that outline its surface in high-dimensional space. Unlike images, which are flat surfaces, manifolds 
                    can be curved surfaces. By taking into account the curvature of a manifold, spatial filters like the Gaussian Blur can be approximated in a single loop over 
                    the points on the manifold. The blurred manifolds can then be sampled to obtain an approximation of the filtered image. Since only a handful of manifolds 
                    are needed, this approach is significantly faster than evaluating the high-dimensional filter over the image and can be used in real-time. 
                </Typography>
                <Space size='xs'/>
                <Typography>
                    The accuracy of the approximation of the filtered image depends on the manifolds that are sampled. Pixels in the original image correspond to a sample point in
                    each manifold. For a pixel to have an accurate approximation at least one manifold must have a corresponding sample point that is close in distance to the pixel, 
                    treating the pixel's values as additional spatial dimensions. The adaptive manifolds technique accomplishes this by computing an initial manifold based on the 
                    original image, then partitions the image into areas with pixels above and below the manifold in high-dimensional space. Recursing on the pixels below the manifold 
                    allows the technique to generate another manifold that more closely matches those pixels (hence the manfiolds are adaptive). The same is done for the pixels above 
                    the manifold. The recursion is repeated until most pixels in the original image (~95%) are close to one of the manifolds. In practice, this usually means generating 
                    somewhere between 3 to 7 manifolds. 
                </Typography>
                <Space size='sm'/>
                {/* Images of manifold tree */}
                <Gallery size='md' >
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.ORIGINAL}
                        caption='Example input image for adaptive manifolds technique.'
                    />
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.ROOT_MANIFOLD}
                        caption='Initial manifold generated from the input image.'
                    />
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.CLUSTERS}
                        caption='Binary partitioning of the initial manifold based on whether a pixel in the input image is above or below the initial manifold.'
                    />
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.WHITE_CLUSTER_MANIFOLD}
                        caption='Adaptive manifold generated by recursing on the partition shown in white.'
                    />
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.BLACK_CLUSTER_MANIFOLD}
                        caption='Adaptive manifold generated by recursing on the partition shown in black.'
                    />
                </Gallery>
                <Space size='md'/>
                <Typography>
                    The bilaterial filter is an example of a high-dimensional filter that can be used for denoising and is demonstrated 
                    in <i>Adaptive Manifolds for Real-Time High-Dimensional Filtering</i>. It is similar to the gaussian blur, but uses the red, green, and 
                    blue color channels in an image as additional dimensions. This has the effect of preserving edges while only blurring noise and other small scale details. I 
                    implemented this filter using the adaptive manifolds technique by generating manifolds in 5D-space with x, y, red, green, and blue dimensions. The bilateral filter 
                    becomes a gaussian filter over the surfaces of the manifolds. To improve performance, I used a recursive filter as an approximation of the gaussian filter as 
                    described in <i>Adaptive Manifolds for Real-Time High-Dimensional Filtering</i>.
                </Typography>
                <Space size='sm'/>
                {/* Images of bilateral filter */}
                <Gallery size='md' >
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.ORIGINAL}
                        caption='Original image before applying filter.'
                    />
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.BILATERAL}
                        caption='Image after applying the bilateral filter using the adaptive manifolds technique.'
                    />
                </Gallery>
                <Space size='md'/>
                <Typography>
                    The non-local means filter is a more advanced denoising method also presented in<i>Adaptive Manifolds for Real-Time High-Dimensional Filtering</i>. 
                    For the non-local means filter, the values of a single pixel is considered to be it's RGB values as well as the RGB values of its neighboring pixels with a square 
                    grid. This has the effect of pixels with similar surroundings (i.e. similar noise) to be blurred together, even if they are far away from each other in the image 
                    or their individual RGB values are far apart. The result is more noise reduction and less blurring of soft or small-scale details than the bilateral filter. The 
                    dimensions of the non-local means filter depends on the size of the grid of neighboring pixels. I implemented a non-local means filter with a 7x7 grid by 
                    generating manifolds in 149-dimensional space, 3 dimensions for the RGB values of each of the 49 neighbors in the grid and 2 dimensions for the x and y spatial 
                    dimensions. The non-local means filter also becomes a gaussian filter over the surfaces of the manifolds. I again use a faster recursive filter to approximate the 
                    gaussian. 
                </Typography>
                <Space size='sm'/>
                {/* Images of non-local means denoising */}
                <Gallery size='lg' >
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.NOISY_IMAGE}
                        caption='Night photograph with strong noise.'
                    />
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.NON_LOCAL_DENOISED}
                        caption='Photograph after applying the non-local means filter using the adaptive manifolds technique. Noise is substantially reduced.'
                    />
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.BILATERAL_DENOISED}
                        caption='For comparison, same photograph denoised by a bilateral filter using adaptive manifolds. Leaves behind more noise than the non-local means filter.'
                    />
                </Gallery>
                <Space size='md'/>
                <Typography>
                    The paper <i>Adaptive Manifolds for Real-Time High-Dimensional Filtering</i> focuses on applications of their technique to denoising images. As part of my class 
                    project I demonstrated that their technique can also be used to implement depth of field as a post-processing effect. The intuition behind this is that depth of 
                    field behaves a lot like the bilateral filter. The bilateral filter is a blur that preserves edges in an image, where edges are determined by sharp variations in 
                    color. Depth of field is a blur that preserves edges determined by sharp variations in depth, the distance from the camera to what is shown in the pixel. This 
                    information can easily be recorded as part of the 3D rendering pipeline in real-time applications. Depth of field differs from the bilateral filter in that the 
                    intensity of the blur depends on the distance from the focal plane of the image, the distance from the camera at which objects appear most in focus. There are two 
                    steps in my depth of field post-process. The first step is to compute a depth-edge preserving blur using the adaptive manifolds technique. This is accomplished by 
                    generating manifolds in 3D-space with camera depth as the third dimension. The second step is to linearly blend the blurred image with the original based on each 
                    pixel's distance from the focal plane. The further the pixel is from the focal plane, the more weight is applied to the blurred image, up to a certain max 
                    distance. The original image receives full weight at the focal plane. Although not equivalent to simulating the optical phenomenon of depth of field, the behavior 
                    is similar enough to provide convincing results and can be used for the same artistic purposes. A degree of artistic control can be implemented by generating one 
                    or more depth-edge blurs of various intensities and using custom interpolation methods to blend between them and the original image.
                </Typography>
                <Space size='sm'/>
                {/* Images of depth of field */}
                <Gallery size='md' >
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.FULL_FOCUS}
                        caption='Original image before post-process.'
                    />
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.DEPTH_MAP}
                        caption='Depth map showing the camera depth of each pixel; black is distance zero and white is farthest distance recorded. (Note: Camera depth in the background is clamped; ideally clamping should be avoided for more accurate results.)'
                    />
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.FOCAL_DISTANCE}
                        caption='Depth map is used to compute distance from the focal plane; black is distance zero and white is farthest distance recorded. Focal plane chosen to cut through the middle of the cube.'
                    />
                    <GalleryTile
                        image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.DEPTH_OF_FIELD}
                        caption='Image after applying the pseudo depth-of-field post-process.'
                    />
                </Gallery>
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