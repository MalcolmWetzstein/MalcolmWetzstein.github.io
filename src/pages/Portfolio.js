import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Container } from '@material-ui/core';
import { Page, Partition, Space, Suggestions, Categories, Title, Showcase, ShowcaseTile } from '../components/Custom';
import { Home, Skills, Courses, AdaptiveFilter, ARVoxel, Architecture, DesignModeling, Music, StarLogo, SurfaceFluid, Website } from './Pages';
import * as CONSTANTS from '../Constants';

class Portfolio extends CustomComponent 
{
    static buttonText = "Portfolio";
    
    render()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center maxWidth='lg'>
                    <Title>
                        {Portfolio.buttonText}
                    </Title>
                    <Container maxWidth='xl'>
                        <Categories sparse labels={['technical', 'creative']}>
                            {/* Technical */}
                            <React.Fragment>
                                <Space level={2/3}/>
                                <Showcase pageDeque={this.props.pageDeque}>
                                    <ShowcaseTile label='Custom Terrain in StarLogo Nova' image={CONSTANTS.IMAGES.PORTFOLIO.STARLOGO.THUMB}>
                                        <StarLogo/>
                                    </ShowcaseTile>
                                    <ShowcaseTile label='Mesh Surface Fluid Flow' image={CONSTANTS.IMAGES.PORTFOLIO.SURFACE_FLUID.THUMB}>
                                        <SurfaceFluid/>
                                    </ShowcaseTile>
                                    <ShowcaseTile label='Real-Time High Dimensional Filtering' image={CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.THUMB}>
                                        <AdaptiveFilter/>
                                    </ShowcaseTile>
                                </Showcase>
                            </React.Fragment>

                            {/* Creative */}
                            <React.Fragment>
                                <Space level={2/3}/>
                                <Showcase pageDeque={this.props.pageDeque}>
                                    <ShowcaseTile label='Augmented Reality Game' image={CONSTANTS.IMAGES.PORTFOLIO.AR_GAME.THUMB}>
                                        <ARVoxel/>
                                    </ShowcaseTile>
                                    <ShowcaseTile label='Personal Website' image={CONSTANTS.IMAGES.PORTFOLIO.WEBSITE.THUMB}>
                                        <Website/>
                                    </ShowcaseTile>
                                    <ShowcaseTile label='3D Modeling & Rendering' image={CONSTANTS.IMAGES.PORTFOLIO.PAVILLION.THUMB}>
                                        <DesignModeling/>
                                    </ShowcaseTile>
                                    <ShowcaseTile label='Architecture Design Models' image={CONSTANTS.IMAGES.PORTFOLIO.INTRO_ARCH.THUMB}>
                                        <Architecture/>
                                    </ShowcaseTile>
                                    <ShowcaseTile label='Music Compositions' image={CONSTANTS.IMAGES.PORTFOLIO.MUSIC.THUMB}>
                                        <Music/>
                                    </ShowcaseTile>
                                </Showcase>
                            </React.Fragment>
                        </Categories>
                    </Container>
                </Partition>
                <Space/>
                <Suggestions labels={['courses', 'skills', 'home']}>
                    <Courses/>
                    <Skills/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(Portfolio);