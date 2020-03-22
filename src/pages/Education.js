import React from 'react';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid, Divider, Box, Tooltip, withTheme, Button } from '@material-ui/core';
import { CustomComponent, Page, Suggestions, PageHeader, Space, DateRange, Timeline, TimelineTile, Indent, Bullets, Categories, SectionHeader } from '../components';
import { Home, Experience, Portfolio } from '.';
import * as CONSTANTS from '../Constants';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Education extends CustomComponent
{
    static buttonText = "Education";
    
    render ()
    {
        return (
            <Page
                id='education'
                pageDeque={this.props.pageDeque}
                maxWidth='md'
            >
                <PageHeader>
                    {Education.buttonText}
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
                            city='Cambridge'
                            state='MA'
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
                            city='Cambridge'
                            state='MA'
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
                        <Course label='Computer Graphics' upper project
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
                        <Course label='Shape Analysis' graduate project
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
                        <Course label='Computational Photography' graduate project
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
                        <Course label='Compuational Fabrication' graduate project
                            school={CONSTANTS.NAMES.MIT}
                            number='6.839'
                            instructors='Wojciech Matusik'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Computer Vision' upper project
                            school={CONSTANTS.NAMES.MIT}
                            number='6.819'
                            instructors={['William Freeman', 'Antonio Torralba']}
                            topics={[
                                
                            ]}
                        />
                        <Course label='Design & Analysis of Algorithms' upper exam
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
                        <Course label='Software Engineering' upper project
                            school={CONSTANTS.NAMES.MIT}
                            number='6.031 (Previously 6.005)'
                            instructors='Max Goldman'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Computer Architecture' lower lab
                            school={CONSTANTS.NAMES.MIT}
                            number='6.004'
                            instructors='Christopher Terman'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Oral Communication' lower communication
                            school={CONSTANTS.NAMES.MIT}
                            number='6.UAT'
                            instructors='Tony Eng'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Machine Learning' lower lab
                            school={CONSTANTS.NAMES.MIT}
                            number='6.036'
                            instructors={['Leslie Kaelbling', 'Tom\xE1s Lozano-P\xE9rez']}
                            topics={[
                                
                            ]}
                        />
                        <Course label='Computer Systems Engineering' upper communication
                            school={CONSTANTS.NAMES.MIT}
                            number='6.033'
                            instructors='Katrina LaCurts'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Network Theory' upper exam
                            school={CONSTANTS.NAMES.MIT}
                            number='6.207/14.15'
                            instructors={['Devavrat Shah', 'Alexander Teytelboym']}
                            topics={[
                                
                            ]}
                        />
                        <Course label='Algorithms' lower exam
                            school={CONSTANTS.NAMES.MIT}
                            number='6.006'
                            instructors={['Ronald Rivest', 'Piotr Indyk']}
                            topics={[
                                
                            ]}
                        />
                        <Course label='Fundamentals of Programming' lower lab
                            school={CONSTANTS.NAMES.MIT}
                            number='6.009'
                            instructors={['Adam Chlipala', 'Christopher Terman']}
                            topics={[
                                
                            ]}
                        />
                        <Course label='EECS: Robotics' intro lab
                            school={CONSTANTS.NAMES.MIT}
                            number='6.01'
                            instructors='Adam Hartz'
                            topics={[
                                
                            ]}
                        />
                        <Course label='CS: Programming in Python' intro standing
                            school={CONSTANTS.NAMES.MIT}
                            number='6.0001'
                            topics={[

                            ]}
                        />
                    </React.Fragment>
                    <React.Fragment>{/* Mathematics */}
                        <Space size='xs'/>
                        <Course label='Linear Algebra' lower exam
                            school={CONSTANTS.NAMES.MIT}
                            number='18.06'
                            instructors='Alex Townsend'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Differential Equations' lower exam
                            school={CONSTANTS.NAMES.MIT}
                            number='18.03'
                            instructors='Bjorn Poonen'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Multivariable Calculus' general exam
                            school={CONSTANTS.NAMES.MIT}
                            number='18.02'
                            instructors='William Minicozzi'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Probability & Random Variables' lower exam
                            school={CONSTANTS.NAMES.MIT}
                            number='18.600'
                            instructors='Scott Sheffield'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Discrete Math for Computer Science' intro exam
                            school={CONSTANTS.NAMES.MIT}
                            number='18.062/6.042'
                            instructors={['Albert Meyer', 'Adam Chlipala']}
                            topics={[
                                
                            ]}
                        />
                        <Course label='Calculus' general ap
                            school={CONSTANTS.NAMES.MIT}
                            number='18.01'
                            topics={[
                                
                            ]}
                        />
                    </React.Fragment>
                    <React.Fragment>{/* Design */}
                        <Space size='xs'/>
                        <Course label='Visualization & Motion Graphics' graduate project
                            school={CONSTANTS.NAMES.MIT}
                            number='4.562'
                            instructors='Andrzej Zarzycki'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Information & Interaction Design' lower studio
                            school={CONSTANTS.NAMES.MIT}
                            number='4.032'
                            instructors='Benjamin Fry'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Design Computation: 3D Modeling' intro project
                            school={CONSTANTS.NAMES.MIT}
                            number='4.500'
                            instructors='Lawrence Sass'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Architecture Design' intro studio
                            school={CONSTANTS.NAMES.MIT}
                            number='4.021'
                            instructors='Lorena Bello Gomez'
                            topics={[
                                
                            ]}
                        />
                    </React.Fragment>
                    <React.Fragment>{/* Natural Sciences */}
                        <Space size='xs'/>
                        <Course label='Physics: Mechanics' general ap
                            school={CONSTANTS.NAMES.MIT}
                            number='8.01'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Physics: Electricity & Magnetism' general exam
                            school={CONSTANTS.NAMES.MIT}
                            number='8.02'
                            instructors='Robert Redwine'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Chemistry' general exam
                            school={CONSTANTS.NAMES.MIT}
                            number='5.111'
                            instructors='Catherine Drennan'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Biology' general exam
                            school={CONSTANTS.NAMES.MIT}
                            number='7.013'
                            instructors='Hazel Sive'
                            topics={[
                                
                            ]}
                        />
                    </React.Fragment>
                    <React.Fragment>{/* Music */}
                        <Space size='xs'/>
                        <Course label='Tonal Music Composition' upper project
                            school={CONSTANTS.NAMES.MIT}
                            number='21M.303'
                            instructors='Charles Shadle'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Harmony & Counterpoint II' lower project
                            school={CONSTANTS.NAMES.MIT}
                            number='21M.302'
                            instructors='Kathryn Salfelder'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Harmony & Counterpoint I' lower project
                            school={CONSTANTS.NAMES.MIT}
                            number='21M.301'
                            instructors='Justin Casinghino'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Musical Composition' intro project
                            school={CONSTANTS.NAMES.MIT}
                            number='21M.065'
                            instructors='Florian Hollerweger'
                            topics={[
                                
                            ]}
                        />
                        <Course label='Western Music' intro writing
                            school={CONSTANTS.NAMES.MIT}
                            number='21M.011'
                            instructors={['Emily Richmond Pollock', 'Teresa Neff']}
                            topics={[
                                
                            ]}
                        />
                    </React.Fragment>
                </Categories>
                <Space size='lg'/>
                <Suggestions labels={['experience', 'portfolio', 'home']}>
                    <Experience/>
                    <Portfolio/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

class Degree extends CustomComponent
{
    render()
    {
        return(
            <React.Fragment>
                <DateRange
                    startMonth={this.props.startMonth}
                    startYear={this.props.startYear}
                    endMonth={this.props.endMonth}
                    endYear={this.props.endYear}
                />
                <Typography variant='h6'>
                    {this.props.school}
                </Typography>
                <Typography variant='subtitle2' color='textSecondary'>
                    {this.props.city + ', ' + this.props.state}
                </Typography>
                <Typography variant='subtitle1'>
                    {this.props.degree}
                </Typography>
            </React.Fragment>    
        );
    }
}

class Course extends CustomComponent
{
    constructor(props)
    {
        super(props);

        this.state = {
            hover: false,
            open: false
        };

        this.ref = React.createRef();

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    render()
    {
        return (
            <ExpansionPanel
                expanded={this.state.open}
                TransitionProps={{ timeout: 'auto' }}
                ref={this.ref}
            >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    onClick={this.onClick}
                    onMouseOver={this.onMouseOver}
                    onMouseLeave={this.onMouseLeave}
                >
                    <Grid
                        container
                        direction='row'
                        alignItems='center'
                    >
                        <Grid
                            item
                            xs={6}
                        >
                            <Indent>
                                <Typography variant='h6'>
                                    {this.props.label}
                                </Typography>
                            </Indent>
                        </Grid>
                        <Grid
                            item
                            xs={2}
                        >
                            <Tooltip title={this.levelTooltip()}>
                                {
                                    this.state.hover || this.state.open ? (
                                        <Typography
                                            variant='subtitle1'
                                            color='textSecondary'
                                            align='center'
                                        >
                                            {this.props.graduate ? 'Graduate' : undefined}
                                            {this.props.upper ? 'Advanced' : undefined}
                                            {this.props.lower ? 'Intermediate' : undefined}
                                            {this.props.intro ? 'Introductory' : undefined}
                                            {this.props.general ? 'General Education' : undefined}
                                        </Typography>
                                    ) : (
                                        <Typography
                                            variant='subtitle1'
                                            color='textSecondary'
                                            align='center'
                                        >
                                            &bull;
                                        </Typography>
                                    )
                                }
                            </Tooltip>
                        </Grid>
                        <Grid
                            item
                            xs={1}
                        />
                        <Grid
                            item
                            xs={2}
                        >
                            <Tooltip title={this.assessmentTooltip()}>
                                {
                                    this.state.hover || this.state.open ? (
                                        <Typography
                                            variant='subtitle1'
                                            color='textSecondary'
                                            align='center'
                                        >
                                            {this.props.seminar ? 'Seminar' : undefined}
                                            {this.props.studio ? 'Studio' : undefined}
                                            {this.props.lab ? 'Lab' : undefined}
                                            {this.props.project ? 'Project' : undefined}
                                            {this.props.exam ? 'Exam' : undefined}
                                            {this.props.writing ? 'Writing' : undefined}
                                            {this.props.communication ? 'Communication' : undefined}
                                            {this.props.ap ? 'AP Credit' : undefined}
                                            {this.props.standing ? 'ASE Credit' : undefined}
                                        </Typography>
                                    ) : (
                                        <Typography
                                            variant='subtitle1'
                                            color='textSecondary'
                                            align='center'
                                        >
                                            &bull;
                                        </Typography>
                                    )
                                }
                            </Tooltip>
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
                            <Typography
                                variant='subtitle2'
                                color='textSecondary'
                            >
                                {this.props.school}
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                color='textSecondary'
                            >
                                {this.instructors()}
                            </Typography>
                            <Space size='sm'/>
                            <Indent>
                                <Typography variant='body1'>
                                    {this.props.description}
                                </Typography>
                            </Indent>
                            <Space size='sm'/>
                            <Typography variant='subtitle1'>
                                Topics:
                            </Typography>
                            <Bullets
                                focus
                                bullets={this.props.topics}
                            />
                        </Indent>
                    </Box>
                    <Box
                        position='absolute'
                        right={0}
                        bottom={0}
                        margin='0 24px 24px 0'
                    >
                        <Button
                            onClick={this.onClick}
                            size='small'
                        >
                            Close
                        </Button>
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

    levelTooltip()
    {
        if (this.props.graduate)
            return 'graduate level course';
        else if (this.props.upper)
            return 'undergraduate level, typically taken junior or senior year';
        else if (this.props.lower)
            return 'undergraduate level, typically taken sophmore year after prerequesites';
        else if (this.props.intro)
            return 'undergraduate level, typically taken freshman year with no prerequesites';
        else if (this.props.general)
            return 'undergraduate general education requirement, typically taken freshman year';

        return '';
    }

    assessmentTooltip()
    {
        if (this.props.seminar)
            return 'seminar style instruction';
        else if (this.props.studio)
            return 'studio style critiques were primary form of assessment';
        else if (this.props.lab)
            return 'in class labs were primary form of assessment';
        else if (this.props.project)
            return 'projects were primary form of assessment';
        else if (this.props.exam)
            return 'exams were primary form of assessment';
        else if (this.props.writing)
            return 'written papers were primary form of assessment';
        else if (this.props.communication)
            return 'oral presentations and/or written reports were primary form of assessment';
        else if (this.props.ap)
            return 'credit obtained from AP exam';
        else if (this.props.standing)
            return 'credit obtained from an Advanced Standing Exam';

        return '';
    }

    onMouseOver()
    {
        this.setState({ hover: true });
    }

    onMouseLeave()
    {
        this.setState({ hover: false });
    }

    onClick()
    {
        this.setState({ open: !this.state.open });

        if (this.ref.current && this.ref.current.getBoundingClientRect().top < 0)
            this.ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
    }
}

export default withTheme(Education);