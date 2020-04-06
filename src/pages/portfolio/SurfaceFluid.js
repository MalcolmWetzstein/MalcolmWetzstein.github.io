import React from 'react';
import { withTheme, Container, Typography } from '@material-ui/core';
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
                maxWidth='md'
            >
                <PageHeader>
                    Surface Fluid Flow via Mesh Parameterization
                </PageHeader>
                <Typography>
                    Simulating fluids such as water in games and other real-time media can add both realism and aesthetic appeal. However, high-fidelity fluid 
                    simulation is computationaly expensive and can be hard to achieve in real-time applications. Less realistic lagrangian techniques such as 
                    Smoothed-Particle Hydrodynamics are often used in lieu of higher fidelity eulerian (grid-based) techniques for their lower computational cost  
                    and scalability. For my class project in <i>Shape Analysis</i> I devised an algorithm that allows for higher fidelity eulerian techniques to be 
                    used to simulate fluid flow over surfaces with lower computational cost and improved scalability for real-time applications. 
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
                    Limiting the domain of the fluid simulation to an object's surface is what allows my approach to improve performance. By mapping an object's surface
                    to a 2D plane using mesh parameterization, the domain is transformed from three to two dimensions. For eulerian techniques, a reduction in dimensionality 
                    means far less computation is required to achieve the same fidelity, enabling scalability within the constraints of real-time applications.
                </Typography>
                <Space size='xs'/>
                <Typography>
                    My surface fluid flow algorithm is designed to synergize well with real-time rendering and animation pipelines. Fluid flow is simulated over triangle mesh
                    surface representations by pre-computing a special UV mapping characterized by a single parameter easily tuned by a technical artist. The UV mapping dictates
                    the transformation from the mesh's surface to the 2D simulation plane. This allows us to incorporate additional information from the rendering pipeline such
                    as bump maps and tessellation in order to more accurately represent the surface in the fluid simulation. Surface normal attributes derived from the rendering 
                    pipeline can be rasterized directly into the 2D simulation plane. A transformation from world space to the simulation plane can also be maintained, allowing
                    fluid simulation over surfaces of dynamic objects in real time.
                </Typography>
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