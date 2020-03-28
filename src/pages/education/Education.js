import React from 'react';
import { withTheme } from '@material-ui/core';
import { CustomComponent, Page, Suggestions, PageHeader, Space, Timeline, TimelineTile, Categories, SectionHeader } from '../../components';
import { Home, Experience, Portfolio } from '..';
import { Degree, Course } from '.';
import { PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class Education extends CustomComponent
{
    static displayText = CONSTANTS.EDUCATION_DISPLAY_TEXT;

    componentDidMount() { console.log('Please excuse the errors on the Education page until the course content is complete. Thank you.'); }
    
    render()
    {
        return (
            <Page
                id='education'
                pageDeque={this.props.pageDeque}
                maxWidth='md'
            >
                <PageHeader>
                    {Education.displayText}
                </PageHeader>
                <SectionHeader>
                    Degrees
                </SectionHeader>
                <Timeline>
                    <TimelineTile
                        image={CONSTANTS.IMAGES.LOGO.MIT}
                        imageInfo={CONSTANTS.NAMES.MIT}
                        details={[
                            [
                                'Thesis Project',
                                'Custom and Interactive Environments in StarLogo Nova for Computational Modeling'
                            ],
                            [
                                'Concentration in Computer Graphics',
                                '3D Rendering & Animation Algorithms',
                                'Physically-Based Simulation',
                                'Geometry Processing',
                                'Computational Photography (Image Processing)',
                                'Computer Vision',
                                'Computational Fabrication'
                            ],
                            '5.0 GPA'
                        ]}
                    >
                        <Degree 
                            startMonth={6}
                            startYear={2018}
                            endMonth={9}
                            endYear={2019}
                            school={CONSTANTS.NAMES.MIT}
                            city={CONSTANTS.NAMES.CAMBRIDGE}
                            state={CONSTANTS.NAMES.MASSACHUSETTS}
                            degree='MEng in Electrical Engineering and Computer Science'
                        />
                    </TimelineTile>
                    <TimelineTile
                        image={CONSTANTS.IMAGES.LOGO.MIT}
                        imageInfo={CONSTANTS.NAMES.MIT}
                        details={[
                            [
                                'Topics Covered',
                                'Software Engineering',
                                'Algorithm Design & Analysis',
                                'Computer Architecture',
                                'Machine Learning',
                                'Systems Engineering'
                            ],
                            [
                                'Other Subjects',
                                'Mathematics 5 courses',
                                'Architecture & Design 4 courses',
                                'Music Theory & Composition 5 courses'
                            ], 
                            '4.7 GPA'
                        ]}
                    >
                        <Degree
                            startMonth={9}
                            startYear={2014}
                            endMonth={6}
                            endYear={2018}
                            school={CONSTANTS.NAMES.MIT}
                            city={CONSTANTS.NAMES.CAMBRIDGE}
                            state={CONSTANTS.NAMES.MASSACHUSETTS}
                            degree='BS in Computer Science and Engineering'
                        />
                    </TimelineTile>
                </Timeline>
                <Space size='lg'/>
                <SectionHeader>
                    Courses
                </SectionHeader>
                <Categories
                    backdrop
                    labels={['Computer Science', 'Mathematics', 'Design', 'Natural Sciences', 'Music']}
                >
                    <React.Fragment>{/* Computer Science */}
                        <Space size='xs'/>
                        <Course
                            label='Computer Graphics'
                            level='upper'
                            assessment='project'
                            school={CONSTANTS.NAMES.MIT}
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
                        <Course
                            label='Shape Analysis'
                            level='graduate'
                            assessment='project'
                            school={CONSTANTS.NAMES.MIT}
                            number='6.838'
                            instructors='Justin Solomon'
                            description='Survey of topics in geometry processing with an emphasis on applications. Introduction to the mathematical concepts needed to apply them.'
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
                        <Course
                            label='Computational Photography'
                            level='graduate'
                            assessment='project'
                            school={CONSTANTS.NAMES.MIT}
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
                        <Course
                            label='Compuational Fabrication'
                            level='graduate'
                            assessment='project'
                            school={CONSTANTS.NAMES.MIT}
                            number='6.839'
                            instructors='Wojciech Matusik'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Computer Vision'
                            level='upper'
                            assessment='project'
                            school={CONSTANTS.NAMES.MIT}
                            number='6.819'
                            instructors={['William Freeman', 'Antonio Torralba']}
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Design & Analysis of Algorithms'
                            level='upper'
                            assessment='exam'
                            school={CONSTANTS.NAMES.MIT}
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
                        <Course
                            label='Software Engineering'
                            level='upper'
                            assessment='project'
                            school={CONSTANTS.NAMES.MIT}
                            number='6.031 (Previously 6.005)'
                            instructors='Max Goldman'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Computer Architecture'
                            level='lower'
                            assessment='lab'
                            school={CONSTANTS.NAMES.MIT}
                            number='6.004'
                            instructors='Christopher Terman'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Oral Communication'
                            level='lower'
                            assessment='communication'
                            school={CONSTANTS.NAMES.MIT}
                            number='6.UAT'
                            instructors='Tony Eng'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Machine Learning'
                            level='lower'
                            assessment='lab'
                            school={CONSTANTS.NAMES.MIT}
                            number='6.036'
                            instructors={['Leslie Kaelbling', 'Tom\xE1s Lozano-P\xE9rez']}
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Computer Systems Engineering'
                            level='upper'
                            assessment='communication'
                            school={CONSTANTS.NAMES.MIT}
                            number='6.033'
                            instructors='Katrina LaCurts'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Network Theory'
                            level='upper'
                            assessment='exam'
                            school={CONSTANTS.NAMES.MIT}
                            number='6.207/14.15'
                            instructors={['Devavrat Shah', 'Alexander Teytelboym']}
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Algorithms'
                            level='lower'
                            assessment='exam'
                            school={CONSTANTS.NAMES.MIT}
                            number='6.006'
                            instructors={['Ronald Rivest', 'Piotr Indyk']}
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Fundamentals of Programming'
                            level='lower'
                            assessment='lab'
                            school={CONSTANTS.NAMES.MIT}
                            number='6.009'
                            instructors={['Adam Chlipala', 'Christopher Terman']}
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='EECS: Robotics'
                            level='intro'
                            assessment='lab'
                            school={CONSTANTS.NAMES.MIT}
                            number='6.01'
                            instructors='Adam Hartz'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='CS: Programming in Python'
                            level='intro'
                            assessment='standing'
                            school={CONSTANTS.NAMES.MIT}
                            number='6.0001'
                            topics={[

                            ]}
                        />
                    </React.Fragment>
                    <React.Fragment>{/* Mathematics */}
                        <Space size='xs'/>
                        <Course
                            label='Linear Algebra'
                            level='lower'
                            assessment='exam'
                            school={CONSTANTS.NAMES.MIT}
                            number='18.06'
                            instructors='Alex Townsend'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Differential Equations'
                            level='lower'
                            assessment='exam'
                            school={CONSTANTS.NAMES.MIT}
                            number='18.03'
                            instructors='Bjorn Poonen'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Multivariable Calculus'
                            level='general'
                            assessment='exam'
                            school={CONSTANTS.NAMES.MIT}
                            number='18.02'
                            instructors='William Minicozzi'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Probability & Random Variables'
                            level='lower'
                            assessment='exam'
                            school={CONSTANTS.NAMES.MIT}
                            number='18.600'
                            instructors='Scott Sheffield'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Discrete Math for Computer Science'
                            level='intro'
                            assessment='exam'
                            school={CONSTANTS.NAMES.MIT}
                            number='18.062/6.042'
                            instructors={['Albert Meyer', 'Adam Chlipala']}
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Calculus'
                            level='general'
                            assessment='ap'
                            school={CONSTANTS.NAMES.MIT}
                            number='18.01'
                            topics={[
                                
                            ]}
                        />
                    </React.Fragment>
                    <React.Fragment>{/* Design */}
                        <Space size='xs'/>
                        <Course
                            label='Visualization & Motion Graphics'
                            level='graduate'
                            assessment='project'
                            school={CONSTANTS.NAMES.MIT}
                            number='4.562'
                            instructors='Andrzej Zarzycki'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Information & Interaction Design'
                            level='lower'
                            assessment='studio'
                            school={CONSTANTS.NAMES.MIT}
                            number='4.032'
                            instructors='Benjamin Fry'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Design Computation: 3D Modeling'
                            level='intro'
                            assessment='project'
                            school={CONSTANTS.NAMES.MIT}
                            number='4.500'
                            instructors='Lawrence Sass'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Architecture Design'
                            level='intro'
                            assessment='studio'
                            school={CONSTANTS.NAMES.MIT}
                            number='4.021'
                            instructors='Lorena Bello Gomez'
                            topics={[
                                
                            ]}
                        />
                    </React.Fragment>
                    <React.Fragment>{/* Natural Sciences */}
                        <Space size='xs'/>
                        <Course
                            label='Physics: Mechanics'
                            level='general'
                            assessment='ap'
                            school={CONSTANTS.NAMES.MIT}
                            number='8.01'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Physics: Electricity & Magnetism'
                            level='general'
                            assessment='exam'
                            school={CONSTANTS.NAMES.MIT}
                            number='8.02'
                            instructors='Robert Redwine'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Chemistry'
                            level='general'
                            assessment='exam'
                            school={CONSTANTS.NAMES.MIT}
                            number='5.111'
                            instructors='Catherine Drennan'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Biology'
                            level='general'
                            assessment='exam'
                            school={CONSTANTS.NAMES.MIT}
                            number='7.013'
                            instructors='Hazel Sive'
                            topics={[
                                
                            ]}
                        />
                    </React.Fragment>
                    <React.Fragment>{/* Music */}
                        <Space size='xs'/>
                        <Course
                            label='Tonal Music Composition'
                            level='upper'
                            assessment='project'
                            school={CONSTANTS.NAMES.MIT}
                            number='21M.303'
                            instructors='Charles Shadle'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Harmony & Counterpoint II'
                            level='lower'
                            assessment='project'
                            school={CONSTANTS.NAMES.MIT}
                            number='21M.302'
                            instructors='Kathryn Salfelder'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Harmony & Counterpoint I'
                            level='lower'
                            assessment='project'
                            school={CONSTANTS.NAMES.MIT}
                            number='21M.301'
                            instructors='Justin Casinghino'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Musical Composition'
                            level='intro'
                            assessment='project'
                            school={CONSTANTS.NAMES.MIT}
                            number='21M.065'
                            instructors='Florian Hollerweger'
                            topics={[
                                
                            ]}
                        />
                        <Course
                            label='Western Music'
                            level='intro'
                            assessment='writing'
                            school={CONSTANTS.NAMES.MIT}
                            number='21M.011'
                            instructors={['Emily Richmond Pollock', 'Teresa Neff']}
                            topics={[
                                
                            ]}
                        />
                    </React.Fragment>
                </Categories>
                <Space size='lg'/>
                <Suggestions labels={[Experience.displayText, Portfolio.displayText, Home.displayText]}>
                    <Experience/>
                    <Portfolio/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

Education.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(Education);