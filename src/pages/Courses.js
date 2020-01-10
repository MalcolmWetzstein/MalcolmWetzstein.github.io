import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography, Container, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid } from '@material-ui/core';
import { Page, Partition, Indent, Space, Suggestions, Categories } from '../components/Custom';
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
                                <Course label='Design & Analysis of Algorithms' upper/>
                                <Course label='Software Engineering' upper/>
                                <Course label='Computer Architecture' lab/>
                                <Course label='Computer Graphics' upper/>
                                <Course label='Shape Analysis' graduate seminar/>
                                <Course label='Computational Photography' graduate/>
                                <Course label='Compuational Fabrication' graduate/>
                                <Course label='Computer Vision' upper/>
                                <Course label='Oral Communication' upper/>
                                <Course label='Introduction to Machine Learning' lab/>
                                <Course label='Computer Systems Engineering' upper/>
                                <Course label='Network Theory' upper/>
                                <Course label='Introduction to Algorithms'/>
                                <Course label='Fundamentals of Programming' lab/>
                                <Course label='Introduction to EECS: Robotics' lab/>
                            </React.Fragment>
                            <React.Fragment>{/* Mathematics */}
                                <Course label='Linear Algebra'/>
                                <Course label='Differential Equations'/>
                                <Course label='Multivariable Calculus'/>
                                <Course label='Probability & Random Variables'/>
                                <Course label='Discrete Math for Computer Science'/>
                                <Course label='Calculus' ap/>
                            </React.Fragment>
                            <React.Fragment>{/* Design */}
                                <Course label='Architecture in Motion Graphics' graduate/>
                                <Course label='Design Computation: 3D Modeling'/>
                                <Course label='Information & Interaction Design' studio/>
                                <Course label='Introduction to Architecture Design' studio/>
                            </React.Fragment>
                            <React.Fragment>{/* Natural Sciences */}
                                <Course label='Physics: Mechanics' ap/>
                                <Course label='Physics: Electricity & Magnetism'/>
                                <Course label='Chemistry'/>
                                <Course label='Biology'/>
                            </React.Fragment>
                            <React.Fragment>{/* Music */}
                                <Course label='Tonal Music Composition' upper/>
                                <Course label='Harmony & Counterpoint II'/>
                                <Course label='Harmony & Counterpoint I'/>
                                <Course label='Intro to Musical Composition'/>
                                <Course label='Intro to Western Music'/>
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
                    <Grid container direction='row'>
                        <Grid item xs={6}>
                            <Typography variant='h6'>
                                {this.props.label}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='subtitle1' color='textSecondary'>
                                {this.props.graduate ? 'Graduate' : undefined}
                                {this.props.ap ? 'AP Credit' : undefined}
                                {this.props.upper ? 'Upper Class' : undefined}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant='subtitle1' color='textSecondary'>
                                {this.props.seminar ? 'Seminar' : undefined}
                                {this.props.studio ? 'Studio' : undefined}
                                {this.props.lab ? 'Lab' : undefined}
                            </Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {this.props.children}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withTheme(Courses);