import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography, Container, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid, Divider, Box } from '@material-ui/core';
import { Page, Indent, Space, Suggestions, Categories, Bullets, Title } from '../components/Custom';
import { Home, Portfolio, Education } from './Pages';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MIT = 'Massachusetts Institute of Technology';

class Courses extends CustomComponent 
{
    static buttonText = "Courses";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Title>
                    {Courses.buttonText}
                </Title>
                <Space size='lg'/>
                <Container maxWidth='md'>
                    <Categories labels={['Computer Science', 'Mathematics', 'Design', 'Natural Sciences', 'Music']}>
                        <React.Fragment>{/* Computer Science */}
                            <Course label='Computer Graphics' upper project
                                school={MIT}
                                number='6.837'
                                instructors={['Wojciech Matusik', 'Justin Solomon']}
                                description='Image synthesis via ray tracing and rasterization pipeline, real-time animation and simulation methods, geometry representations, image perception, and graphics hardware.'
                                topics={[
                                    [
                                        'Ray Tracing',
                                        'Kd-Trees',
                                        'Bounding Volume Hierarchies',
                                        'Area Lights & Shadows',
                                        'Glossy & Specular Reflections',
                                        'Global Illumination Methods'
                                    ],
                                    [
                                        'Rasterization Pipeline',
                                        'Scanline Conversion Optimizations',
                                        'Clipping with Homogeneous Rasterization',
                                        'Screen-Space Interpolation',
                                        'Pixel Shaders',
                                        'Z-Buffer Visibility Test',
                                        'Multisampling & Supersampling',
                                        'Anisotropic & Trilinear Texture Sampling',
                                    ],
                                    [
                                        'Shading',
                                        'Bidirectional Reflectance Distribution Function',
                                        'Cook-Torrance Illumination Model',
                                        'Directional, Spot, & Point Lights',
                                        'Normal Interpolation'
                                    ],
                                    [
                                        'Numerical Integration',
                                        'Particle Systems',
                                        'Cloth Simulation',
                                        'Runge-Kutta',
                                        'Implicit Euler'
                                    ],
                                    'Anti-Aliasing & Sampling Theory',
                                    'Real-Time Shadow Mapping',
                                    'Skeletal Subspace Deformation',
                                    'Texture Mapping',
                                    'GPU Architecture',
                                    'Color Spaces & Perception',
                                    [
                                        'Coordinate Spaces & Transformations',
                                        'Homogeneous Coordinates & Projection',
                                        'Scene Graphs',
                                        'Tangent Space'
                                    ],
                                    [
                                        'Curves & Surfaces',
                                        'B\xE9izer Curves, Patches',
                                        'B-Spline Curves, Patches',
                                        'Triangle Meshes',
                                        'Sub-Division Surfaces',
                                        'Swept Surfaces',
                                        'Implicit Surfaces'
                                    ],
                                    'Image-Based Rendering',
                                    'Display Devices'
                                ]}
                            />
                            <Course label='Shape Analysis' graduate project
                                school={MIT}
                                number='6.838'
                                instructors='Justin Solomon'
                                description='Survey of topics in digital geometry with an emphasis on applications. Introduction to the mathematical concepts needed to apply them.'
                                topics={[
                                    'Finite Element Method',
                                    'Mesh Parameterization',
                                    'Shape Descriptors',
                                    'Surface Correspondence',
                                    'Metric Embedding',
                                    'Clustering & Segmentation',
                                    'Optimal Transport',
                                    'Vector Field Design',
                                    'Spectral Geometry',
                                    [
                                        'Discrete Differential Geometry',
                                        'Surface Laplacian',
                                        'Exterior Calculus',
                                        'Geodesics',
                                        'Curvature',
                                    ]
                                ]}
                            />
                            <Course label='Computational Photography' graduate project
                                school={MIT}
                                number='6.865'
                                instructors='Fredo Durand'
                                description='Digital image formation in modern cameras, image processing techniques for transforming and enhancing images, and image representation and compression in relation to visual perception.'
                                topics={[
                                    'High Dynamic Range & Tone Mapping',
                                    'Image Denoising',
                                    [
                                        'Automatic Panorama Stitching',
                                        'Harris Corner Detection',
                                        'RANSAC',
                                        'Homographies',
                                        'Two-Scale Blending'
                                    ],
                                    'Image Transforms & Morphing',
                                    'Halide (Image Processing Language)',
                                    [
                                        'Digital Cameras & Image Formation',
                                        'Demosaicking',
                                        'Chromatic Abberation',
                                        'Lens Distortion',
                                        'Aperture & Exposure',
                                        'Focus & Depth of Field',
                                        'ISO Analog & Digital Gain',
                                        'Camera Sensors'
                                    ],
                                    'Image Compression',
                                    [
                                        'Basic Image Processing',
                                        'Bilateral Filter',
                                        'High & Low Pass Filters',
                                        'Gamma Correction',
                                        'White Balance',
                                        'Saturation',
                                        'Contrast',
                                        'Brightness'
                                    ],
                                    'Human Image & Color Perception',
                                    'Color Spaces',
                                    'Image-Based Rendering',
                                    [
                                        'Image Resampling Techniques',
                                        'Lanczos', 
                                        'Bi-Cubic', 
                                        'Bi-Linear'
                                    ]
                                ]}
                            />
                            <Course label='Compuational Fabrication' graduate project
                                school={MIT}
                                number='6.839'
                                instructors='Wojciech Matusik'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Computer Vision' upper project
                                school={MIT}
                                number='6.819'
                                instructors={['William Freeman', 'Antonio Torralba']}
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Design & Analysis of Algorithms' upper exam
                                school={MIT}
                                number='6.046'
                                instructors={['Ronald Rivest', 'Shafi Goldwasser']}
                                description='Analysis of popular algorithms and various techniques for design and analysis of new algorithms. Application of design and analysis techniques and popular algorithms in problem solving.'
                                topics={[
                                    [
                                        'Graph Algorithms',
                                        'Shortest Path (Bellman-Ford)',
                                        'All Pairs Shortest Path (Floyd-Warshall & Johnson)',
                                        'Maximum Flow & Minimum Cut',
                                        'Minimum Spanning Trees',
                                        'Counting Networks'
                                    ],
                                    [
                                        'Data Structures',
                                        'B-Trees',
                                        'Fibonacci Heaps'
                                    ],
                                    [
                                        'Randomized Algorithms',
                                        'Skip Lists',
                                        'Sublinear Algorithms'
                                    ],
                                    'Dynamic Programming',
                                    'Linear Programming',
                                    'Greedy Algorithms',
                                    'Amortized Analysis',
                                    'Divide & Conquer',
                                    'Approximation Algorithms',
                                    'Concurrency',
                                    'Fast Fourier Transform',
                                    'NP-Completeness',
                                    'Medians & Order Statistics',
                                    'Number-Theoretic Algorithms'
                                ]}
                            />
                            <Course label='Software Engineering' upper project
                                school={MIT}
                                number='6.031 (Previously 6.005)'
                                instructors='Max Goldman'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Computer Architecture' lower lab
                                school={MIT}
                                number='6.004'
                                instructors='Christopher Terman'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Oral Communication' lower communication
                                school={MIT}
                                number='6.UAT'
                                instructors='Tony Eng'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Machine Learning' lower lab
                                school={MIT}
                                number='6.036'
                                instructors={['Leslie Kaelbling', 'Tom\xE1s Lozano-P\xE9rez']}
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Computer Systems Engineering' upper communication
                                school={MIT}
                                number='6.033'
                                instructors='Katrina LaCurts'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Network Theory' upper exam
                                school={MIT}
                                number='6.207/14.15'
                                instructors={['Devavrat Shah', 'Alexander Teytelboym']}
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Algorithms' lower exam
                                school={MIT}
                                number='6.006'
                                instructors={['Ronald Rivest', 'Piotr Indyk']}
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Fundamentals of Programming' lower lab
                                school={MIT}
                                number='6.009'
                                instructors={['Adam Chlipala', 'Christopher Terman']}
                                topics={[
                                    
                                ]}
                            />
                            <Course label='EECS: Robotics' intro lab
                                school={MIT}
                                number='6.01'
                                instructors='Adam Hartz'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='CS: Programming in Python' intro standing
                                school={MIT}
                                number='6.0001'
                                topics={[

                                ]}
                            />
                        </React.Fragment>
                        <React.Fragment>{/* Mathematics */}
                            <Course label='Linear Algebra' lower exam
                                school={MIT}
                                number='18.06'
                                instructors='Alex Townsend'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Differential Equations' lower exam
                                school={MIT}
                                number='18.03'
                                instructors='Bjorn Poonen'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Multivariable Calculus' general exam
                                school={MIT}
                                number='18.02'
                                instructors='William Minicozzi'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Probability & Random Variables' lower exam
                                school={MIT}
                                number='18.600'
                                instructors='Scott Sheffield'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Discrete Math for Computer Science' intro exam
                                school={MIT}
                                number='18.062/6.042'
                                instructors={['Albert Meyer', 'Adam Chlipala']}
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Calculus' general ap
                                school={MIT}
                                number='18.01'
                                topics={[
                                    
                                ]}
                            />
                        </React.Fragment>
                        <React.Fragment>{/* Design */}
                            <Course label='Visualization & Motion Graphics' graduate project
                                school={MIT}
                                number='4.562'
                                instructors='Andrzej Zarzycki'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Information & Interaction Design' lower studio
                                school={MIT}
                                number='4.032'
                                instructors='Benjamin Fry'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Design Computation: 3D Modeling' intro project
                                school={MIT}
                                number='4.500'
                                instructors='Lawrence Sass'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Architecture Design' intro studio
                                school={MIT}
                                number='4.021'
                                instructors='Lorena Bello Gomez'
                                topics={[
                                    
                                ]}
                            />
                        </React.Fragment>
                        <React.Fragment>{/* Natural Sciences */}
                            <Course label='Physics: Mechanics' general ap
                                school={MIT}
                                number='8.01'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Physics: Electricity & Magnetism' general exam
                                school={MIT}
                                number='8.02'
                                instructors='Robert Redwine'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Chemistry' general exam
                                school={MIT}
                                number='5.111'
                                instructors='Catherine Drennan'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Biology' general exam
                                school={MIT}
                                number='7.013'
                                instructors='Hazel Sive'
                                topics={[
                                    
                                ]}
                            />
                        </React.Fragment>
                        <React.Fragment>{/* Music */}
                            <Course label='Tonal Music Composition' upper project
                                school={MIT}
                                number='21M.303'
                                instructors='Charles Shadle'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Harmony & Counterpoint II' lower project
                                school={MIT}
                                number='21M.302'
                                instructors='Kathryn Salfelder'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Harmony & Counterpoint I' lower project
                                school={MIT}
                                number='21M.301'
                                instructors='Justin Casinghino'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Musical Composition' intro project
                                school={MIT}
                                number='21M.065'
                                instructors='Florian Hollerweger'
                                topics={[
                                    
                                ]}
                            />
                            <Course label='Western Music' intro writing
                                school={MIT}
                                number='21M.011'
                                instructors={['Emily Richmond Pollock', 'Teresa Neff']}
                                topics={[
                                    
                                ]}
                            />
                        </React.Fragment>
                    </Categories>
                </Container>
                <Space size='lg'/>
                <Suggestions labels={['education', 'portfolio', 'home']}>
                    <Education/>
                    <Portfolio/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

class Course extends CustomComponent
{
    render()
    {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Grid container direction='row' alignItems='center'>
                        <Grid item xs={6}>
                            <Typography variant='h6'>
                                {this.props.label}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='subtitle1' color='textSecondary'>
                                {this.props.graduate ? 'Graduate' : undefined}
                                {this.props.upper ? 'Advanced' : undefined}
                                {this.props.lower ? 'Intermediate' : undefined}
                                {this.props.intro ? 'Introductory' : undefined}
                                {this.props.general ? 'General Education' : undefined}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='subtitle1' color='textSecondary'>
                                {this.props.seminar ? 'Seminar' : undefined}
                                {this.props.studio ? 'Studio' : undefined}
                                {this.props.lab ? 'Lab' : undefined}
                                {this.props.project ? 'Project' : undefined}
                                {this.props.exam ? 'Exam' : undefined}
                                {this.props.writing ? 'Writing' : undefined}
                                {this.props.communication ? 'Presentation' : undefined}
                                {this.props.ap ? 'AP Credit' : undefined}
                                {this.props.standing ? 'ASE Credit' : undefined}
                            </Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>
                <Divider/>
                <ExpansionPanelDetails>
                    <Box paddingRight='24px'>
                        <Space size='xs'/>
                        <Indent>
                            <Typography variant='h6'>
                                {'Course ' + this.props.number}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                {this.props.school}
                            </Typography>
                            <Typography variant='subtitle2' color='textSecondary'>
                                {this.instructors()}
                            </Typography>
                            <Space size='sm'/>
                            <Typography variant='body1'>
                                {this.props.description}
                            </Typography>
                            <Space size='sm'/>
                            <Typography variant='subtitle1'>
                                Topics:
                            </Typography>
                            <Bullets focus bullets={this.props.topics}/>
                        </Indent>
                    </Box>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }

    instructors()
    {
        if (this.props.instructors)
        {
            if (Array.isArray(this.props.instructors))
                return (this.props.instructors.length > 1 ? 'Instructors: ' : 'Instructor: ') + this.props.instructors.join(', ');
            else
                return 'Instructor: ' + this.props.instructors;
        }
    }
}

export default withTheme(Courses);