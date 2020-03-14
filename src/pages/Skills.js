import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Grid, Chip } from '@material-ui/core';
import { Page, PageHeader, Space, Suggestions } from '../components/Custom';
import { Home, Contact } from './Pages';
import * as CONSTANTS from '../Constants';

class Skills extends CustomComponent 
{
    static buttonText = "Skills";
    
    render ()
    {
        return (
            <Page
                id='skills'
                pageDeque={this.props.pageDeque}
                maxWidth='sm'
            >
                <PageHeader>
                    {Skills.buttonText}
                </PageHeader>
                <Grid container>
                    <Skill
                        label='JavaScript'
                        expert
                    />
                    <Skill
                        label='WebGL'
                        expert
                    />
                    <Skill
                        label='Git'
                        expert
                    />
                    <Skill
                        label='OpenGL'
                        intermediate
                    />
                    <Skill
                        label='GLSL'
                        intermediate
                    />
                    <Skill
                        label='C++'
                        intermediate
                    />
                    <Skill
                        label='React'
                        intermediate
                    />
                    <Skill
                        label='Express'
                        intermediate
                    />
                    <Skill
                        label='Python'
                        intermediate
                    />
                    <Skill
                        label='NumPy'
                        intermediate
                    />
                    <Skill
                        label='MATLAB'
                        intermediate
                    />
                    <Skill
                        label='Visual Studio Code'
                        intermediate
                    />
                    <Skill
                        label='Unity'
                        beginner
                    />
                    <Skill
                        label='Vuforia'
                        beginner
                    />
                    <Skill
                        label='DirectX'
                        beginner
                    />
                    <Skill
                        label='HLSL'
                        beginner
                    />
                    <Skill
                        label='C#'
                        beginner
                    />
                    <Skill
                        label='Halide'
                        beginner
                    />
                    <Skill
                        label='libigl'
                        beginner
                    />
                    <Skill
                        label='Visual Studio Community'
                        beginner
                    />
                    <Skill
                        label='Rhino 3D'
                        beginner
                    />
                    <Skill
                        label='3DS Max'
                        beginner
                    />
                    <Skill
                        label='Photoshop'
                        beginner
                    />
                </Grid>
                <Space size='lg'/>
                <Suggestions labels={['contact me', 'home']}>
                    <Contact/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

class Skill extends CustomComponent {
    render() {
        const bgColor = (this.props.beginner && CONSTANTS.SKILL_COLOR_BEGINNER) ||
            (this.props.intermediate && CONSTANTS.SKILL_COLOR_INTERMEDIATE) ||
            (this.props.expert && CONSTANTS.SKILL_COLOR_EXPERT);

        return (
            <Grid item>
                <Chip
                    label={this.props.label}
                    style={{ backgroundColor: bgColor }}
                />
            </Grid>
        );
    }
}

export default withTheme(Skills);