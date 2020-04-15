import React from 'react';
import { withTheme, Container, Typography } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton, YoutubeEmbed, SectionHeader, Bullets, GoogleSlidesEmbed } from '../../components';
import { Portfolio, Education } from '..';
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
                maxWidth='md'
            >
                <PageHeader>
                    Surface Fluid Flow via Mesh Parameterization
                </PageHeader>
                <Typography>
                    Simulating fluids such as water in games and other real-time media can add both realism and aesthetic appeal. However, high fidelity fluid 
                    simulation is computationaly expensive and can be hard to achieve in real-time applications. Less realistic Lagrangian techniques such as 
                    Smoothed-Particle Hydrodynamics are often used in lieu of higher fidelity Eulerian (grid-based) techniques for their lower computational cost, 
                    smaller memory requirements, and scalability for simulating larger volumes. For my class project in <i>Shape Analysis</i> I devised a method 
                    for using higher fidelity Eulerian techniques in the special case of simulating fluid flow over surfaces of objects while maintaining  
                    performance and scalability suitable for real-time applications. More about my <i>Shape Analysis</i> course can be found under <b>Education</b>
                </Typography>
                <Space size='sm'/>
                <Container maxWidth='xs'>
                    <NavigationButton
                        label={CONSTANTS.SEE_ON_GITHUB_TEXT}
                        href={CONSTANTS.LINKS.PORTFOLIO.SURFACE_FLUID}
                        variant='outlined'
                    />
                    <Space size='xs'/>
                    <NavigationButton
                        label={CONSTANTS.VIEW_PAPER_TEXT}
                        href={CONSTANTS.DOCUMENTS.PORTFOLIO.SURFACE_FLUID}
                        variant='outlined'
                    />
                </Container>
                <Space size='md'/>
                <GoogleSlidesEmbed
                    title='Surface Fluid Flow Slides'
                    src={CONSTANTS.SLIDES.PORTFOLIO.SURFACE_FLUID}
                />
                <Space size='md'/>
                <Typography>
                    Limiting the domain of the fluid simulation to an object's surface allows for improved performance in Eulerian techniques. By mapping an object's 
                    surface to a 2D plane using mesh parameterization, the simulation domain is transformed from 3D to 2D. Eulerian fluid simulations require far  
                    less computation and memory in 2D than in 3D to achieve the same fidelity, enabling scalability within the constraints of real-time applications.
                </Typography>
                <Space size='xs'/>
                <Typography>
                    My method for surface fluid flow is designed to synergize well with real-time rendering and animation pipelines. Surfaces are represented by triangle meshes and 
                    are mapped to the 2D plane by pre-computing a special UV mapping that minimizes distortion. The UV mapping dictates a transformation from each mesh triangle 
                    to the 2D simulation plane. This allows additional surface information to be incorporated from the rendering pipeline such as bump maps and tessellation in order 
                    to more accurately represent the surface in the fluid simulation. Affects of gravity on fluid flow can be cheaply computed for dynamic, moving objects with arbitrarily 
                    fine-scale surface details. The quality of the simulation can be scaled independent of triangle count or texture resolutions to better capture fine-scale details or 
                    to increase runtime performance.
                </Typography>
                <Space size='xs'/>
                <Typography>
                    Below is a proof-of-concept demonstration I created for my class project. It utilizes a naive, CPU-based Eulerian fluid simulation that I implemented which 
                    exhibits a slow frame rate and rudimentary visualization. However, the frame rate is high enough that an optimized GPU-based implementation can be expected to 
                    achieve real-time performance with equal or greater grid resolution, which correlates directly with the fidelity of an Eulerian fluid simulation. Feel free to 
                    skip around or increase the playback speed in order to see the motion of the fluid better.
                </Typography>
                <Space size='sm'/>
                <YoutubeEmbed
                    title='Surface Fluid Flow Demo'
                    src={CONSTANTS.VIDEO.PORTFOLIO.SURFACE_FLUID}
                />
                <Space size='md'/>
                <SectionHeader>
                    Next Steps
                </SectionHeader>
                <Bullets
                    focus
                    bullets={[
                        'Porting demonstration from Python to C++ with a GPU-based fluid simulation to showcase the method in real-time with animated objects.',
                        'Currently requires mesh surface to have disk homography (be an open surface). Need a way to cut meshes of closed surfaces into parts and connect the simulation planes together to support closed surfaces.',
                        'Mesh parameterization introduces a minimal amount of distortion. Distortion can be mathematically corrected depending on the parameterization.',
                        '2D fluid simulations are accurate only for thin liquids. Need to either add additional (dynamic) layers to create a shallow 3D grid or implement coupling with a 3D Lagrangian simulation in order to support thicker liquids and runoff.'
                    ]}
                />
                <Space size='lg'/>
                <Suggestions labels={[
                        Education.displayText,
                        CONSTANTS.BACK_BUTTON_TEXT
                    ]}
                >
                    <Education/>
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