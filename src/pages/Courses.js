import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography, Container, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid } from '@material-ui/core';
import { Page, Partition, Indent, Space, Suggestions, Categories, Bullets } from '../components/Custom';
import { Home, Portfolio, Education } from './Pages';
import * as CONSTANTS from '../Constants';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
                                <Course label='Design & Analysis of Algorithms' upper
                                    info={[

                                    ]}
                                />
                                <Course label='Software Engineering' upper project
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Computer Architecture' lab
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Computer Graphics' upper project
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Shape Analysis' graduate project
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Computational Photography' graduate project
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Compuational Fabrication' graduate project
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Computer Vision' upper project
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Oral Communication' upper
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Introduction to Machine Learning' lab
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Computer Systems Engineering' upper project
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Network Theory' upper
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Introduction to Algorithms'
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Fundamentals of Programming' lab
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Introduction to EECS: Robotics' lab
                                    info={[
                                        
                                    ]}
                                />
                            </React.Fragment>
                            <React.Fragment>{/* Mathematics */}
                                <Course label='Linear Algebra'
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Differential Equations'
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Multivariable Calculus'
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Probability & Random Variables'
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Discrete Math for Computer Science'
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Calculus' ap
                                    info={[
                                        
                                    ]}
                                />
                            </React.Fragment>
                            <React.Fragment>{/* Design */}
                                <Course label='Architecture in Motion Graphics' graduate project
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Design Computation: 3D Modeling'
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Information & Interaction Design' studio
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Introduction to Architecture Design' studio
                                    info={[
                                        
                                    ]}
                                />
                            </React.Fragment>
                            <React.Fragment>{/* Natural Sciences */}
                                <Course label='Physics: Mechanics' ap
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Physics: Electricity & Magnetism'
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Chemistry'
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Biology'
                                    info={[
                                        
                                    ]}
                                />
                            </React.Fragment>
                            <React.Fragment>{/* Music */}
                                <Course label='Tonal Music Composition' upper project
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Harmony & Counterpoint II' project
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Harmony & Counterpoint I' project
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Intro to Musical Composition'
                                    info={[
                                        
                                    ]}
                                />
                                <Course label='Intro to Western Music'
                                    info={[
                                        
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
                            <Typography variant='subtitle1'>
                                {this.props.label}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='subtitle2' color='textSecondary'>
                                {this.props.graduate ? 'Graduate' : undefined}
                                {this.props.ap ? 'AP Credit' : undefined}
                                {this.props.upper ? 'Upper Level' : undefined}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='subtitle2' color='textSecondary'>
                                {this.props.seminar ? 'Seminar' : undefined}
                                {this.props.studio ? 'Studio' : undefined}
                                {this.props.lab ? 'Lab' : undefined}
                                {this.props.project ? 'Project' : undefined}
                            </Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Bullets focus bullets={this.props.info}/>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withTheme(Courses);