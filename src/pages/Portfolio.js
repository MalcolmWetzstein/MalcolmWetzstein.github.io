import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme } from '@material-ui/core';
import { Page, Space, Suggestions, Categories, PageHeader, Showcase, ShowcaseTile } from '../components/Custom';
import { Home, Skills, Education, AdaptiveFilter, ARVoxel, Architecture, DesignModeling, Music, StarLogo, SurfaceFluid, Website } from './Pages';
import * as CONSTANTS from '../Constants';

class Portfolio extends CustomComponent 
{
    static buttonText = "Portfolio";
    
    render()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <PageHeader>
                    {Portfolio.buttonText}
                </PageHeader>
                <Categories
                    sparse
                    backdrop
                    labels={['technical', 'creative']}
                >
                    {/* Technical */}
                    <React.Fragment>
                        <Space size='xs'/>
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
                        <Space size='xs'/>
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
                <Space size='lg'/>
                <Suggestions labels={['education', 'skills', 'home']}>
                    <Education/>
                    <Skills/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(Portfolio);