import React from 'react';
import { withTheme, Container, Typography } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, NavigationButton, YoutubeEmbed, SectionHeader, Bullets } from '../../components';
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
                maxWidth='md'
            >
                <PageHeader>
                    Surface Fluid Flow via Mesh Parameterization
                </PageHeader>
                <Typography>
                    Simulating fluids such as water in games and other real-time media can add both realism and aesthetic appeal. However, high fidelity fluid 
                    simulation is computationaly expensive and can be hard to achieve in real-time applications. Less realistic lagrangian techniques such as 
                    Smoothed-Particle Hydrodynamics are often used in lieu of higher fidelity eulerian (grid-based) techniques for their lower computational cost, 
                    smaller memory requirements, and scalability for simulating larger volumes. For my class project in <i>Shape Analysis</i> I devised a method 
                    for using higher fidelity eulerian techniques to simulate fluid flow over surfaces of objects while maintaining the performance and scalability 
                    benefits of lagrangian counterparts for real-time applications. 
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
                        label='View Research Paper'
                        variant='outlined'
                    />
                    <Space size='xs'/>
                    <NavigationButton
                        label='View Presentation Slides'
                        variant='outlined'
                    />
                </Container>
                <Space size='sm'/>
                <Typography>
                    Limiting the domain of the fluid simulation to an object's surface allows for improved performance in eulerian techniques. By mapping an object's 
                    surface to a 2D plane using mesh parameterization, the domain is transformed from three to two dimensions. For eulerian techniques, a reduction in 
                    dimensionality means far less computation and memory is required to achieve similar fidelity, enabling scalability within the constraints of 
                    real-time applications.
                </Typography>
                <Space size='xs'/>
                <Typography>
                    My method for surface fluid flow is designed to synergize well with real-time rendering and animation pipelines. Fluid flow is simulated over triangle meshes
                    by pre-computing a special UV mapping optimized to minimize distortion that could affect the simulation. The UV mapping dictates the transformation from 
                    the mesh's surface to the 2D simulation plane. This allows additional information to be incorporated from the rendering pipeline such as bump maps and triangle 
                    tessellation in order to more accurately represent the surface in the fluid simulation. Affects of gravity on fluid flow can be cheaply computed for dynamic, 
                    moving objects with arbitrary surface shape and texture characteristics at various levels of detail.
                </Typography>
                <Space size='xs'/>
                <Typography>
                    Below is a proof-of-concept demonstration I created for my class project. It utilizes a naive, CPU-based implementation of an euler fluid simulation that
                    I implemented which exhibits a very slow frame rate and a rudimentary visualization. However, an optimized GPU-based implementation would be able to achieve 
                    real-time performance with equal or greater grid resolution, which correlates directly with the fidelity of an eulerian fluid simulation. 
                </Typography>
                <Space size='sm'/>
                <YoutubeEmbed/>
                <Space size='md'/>
                <SectionHeader subLevel={3}>
                    Next Steps
                </SectionHeader>
                <Bullets
                    focus
                    bullets={[
                        'Porting demonstration from Python to C++ with a GPU-based fluid simulation to showcase the method in real-time with animated objects.',
                        'Currently requires mesh surface to have disk homography (be an open surface). Need a way to cut meshes of closed surfaces into parts and connect the simulation planes together to support closed surfaces.',
                        'Mesh parameterization introduces a minimal amount of distortion. Distortion can be mathematically corrected depending on the parameterization.',
                        '2D fluid simulations are accurate only for thin liquids. Need to either add additional (dynamic) layers to create a shallow 3D grid or implement coupling with a 3D lagrangian simulation in order to support thicker liquids and runoff.'
                    ]}
                />
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