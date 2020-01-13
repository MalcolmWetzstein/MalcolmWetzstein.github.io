import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography, Container, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid, Divider, Box } from '@material-ui/core';
import { Page, Partition, Indent, Space, Suggestions, Categories, Bullets } from '../components/Custom';
import { Home, Portfolio, Education } from './Pages';
import * as CONSTANTS from '../Constants';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MIT = 'Massachusetts Institute of Technology';

class Courses extends CustomComponent 
{
    static buttonText = "Courses";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Indent>
                        <Typography variant={CONSTANTS.TITLE_VARIANT}>
                            {Courses.buttonText}
                        </Typography>
                    </Indent>
                    <Container maxWidth='md'>
                        <Categories labels={['Computer Science', 'Mathematics', 'Design', 'Natural Sciences', 'Music']}>
                            <React.Fragment>{/* Computer Science */}
                                <Course label='Computer Graphics' upper project
                                    school={MIT}
                                    number='6.837'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Shape Analysis' graduate project
                                    school={MIT}
                                    number='6.838'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Computational Photography' graduate project
                                    school={MIT}
                                    number='6.865'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Compuational Fabrication' graduate project
                                    school={MIT}
                                    number='6.839'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Computer Vision' upper project
                                    school={MIT}
                                    number='6.819'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Design & Analysis of Algorithms' upper exam
                                    school={MIT}
                                    number='6.046'
                                    instructors={['Ronald Rivest', 'Shafi Goldwasser']}
                                    description='Analysis and applications of advanced algorithms in a variety of fields. Design and analysis techniques for creating and using algorithms.'
                                    topics={[
                                        [
                                            'Graph Algorithms',
                                            'Bellman-Ford Shortest Path',
                                            'Floyd-Warshall & Johnson All Pairs Shortest Path',
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
                                        'Concurrency',
                                        'Fast Fourier Transform',
                                        [
                                            'Approximation Algorithms',
                                            'Vertex-Cover',
                                            'Traveling Salesman'
                                        ],
                                        'NP-Completeness',
                                        [
                                            'Sorting',
                                            'Medians & Order Statistics',
                                            'Quicksort'
                                        ],
                                        'Number-Theoretic Algorithms'
                                    ]}
                                />
                                <Course label='Software Engineering' upper project
                                    school={MIT}
                                    number='6.031 (Previously 6.005)'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Computer Architecture' lower lab
                                    school={MIT}
                                    number='6.004'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Oral Communication' lower communication
                                    school={MIT}
                                    number='6.UAT'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Machine Learning' lower lab
                                    school={MIT}
                                    number='6.036'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Computer Systems Engineering' upper communication
                                    school={MIT}
                                    number='6.033'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Network Theory' upper exam
                                    school={MIT}
                                    number='6.207/14.15'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Algorithms' lower exam
                                    school={MIT}
                                    number='6.006'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Fundamentals of Programming' lower lab
                                    school={MIT}
                                    number='6.009'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='EECS: Robotics' intro lab
                                    school={MIT}
                                    number='6.01'
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
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Differential Equations' lower exam
                                    school={MIT}
                                    number='18.03'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Multivariable Calculus' general exam
                                    school={MIT}
                                    number='18.02'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Probability & Random Variables' lower exam
                                    school={MIT}
                                    number='18.600'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Discrete Math for Computer Science' intro exam
                                    school={MIT}
                                    number='18.062/6.042'
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
                                <Course label='Advanced Visualization & Motion Graphics' graduate project
                                    school={MIT}
                                    number='4.562'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Information & Interaction Design' lower studio
                                    school={MIT}
                                    number='4.032'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Design Computation: 3D Modeling' intro project
                                    school={MIT}
                                    number='4.500'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Architecture Design' intro studio
                                    school={MIT}
                                    number='4.021'
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
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Chemistry' general exam
                                    school={MIT}
                                    number='5.111'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Biology' general exam
                                    school={MIT}
                                    number='7.013'
                                    topics={[
                                        
                                    ]}
                                />
                            </React.Fragment>
                            <React.Fragment>{/* Music */}
                                <Course label='Tonal Music Composition' upper project
                                    school={MIT}
                                    number='21M.303'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Harmony & Counterpoint II' lower project
                                    school={MIT}
                                    number='21M.302'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Harmony & Counterpoint I' lower project
                                    school={MIT}
                                    number='21M.301'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Musical Composition' intro project
                                    school={MIT}
                                    number='21M.065'
                                    topics={[
                                        
                                    ]}
                                />
                                <Course label='Western Music' intro writing
                                    school={MIT}
                                    number='21M.011'
                                    topics={[
                                        
                                    ]}
                                />
                            </React.Fragment>
                        </Categories>
                    </Container>
                </Partition>
                <Space level={2}/>
                <Suggestions labels={['portfolio', 'education', 'home']}>
                    <Portfolio/>
                    <Education/>
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
                        <Space level={0.5}/>
                        <Indent>
                            <Grid container justify='flex-start' alignItems='flex-end'>
                                <Grid item>
                                    <Typography variant='h6'>
                                        {'Course ' + this.props.number}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='subtitle1' color='textSecondary'>
                                        &nbsp;{'@'+this.props.school}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Typography variant='subtitle2' color='textSecondary'>
                                {Array.isArray(this.props.instructors) && this.props.instructors.length > 1 ? ('Instructors: ' + this.props.instructors.join(', ')) : 
                                    ('Instructor: ' + this.props.instructors)}
                            </Typography>
                            <Space level={0.5}/>
                            <Typography variant='body1'>
                                {this.props.description}
                            </Typography>
                            <Space level={0.5}/>
                            <Typography variant='subtitle1'>
                                Topics:
                            </Typography>
                            <Bullets bullets={this.props.topics}/>
                        </Indent>
                    </Box>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withTheme(Courses);