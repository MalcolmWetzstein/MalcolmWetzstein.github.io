import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography, Container, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
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
                                <Course label='Design and Analysis of Algorithms'/>
                                <Course label='Software Engineering'/>
                                <Course label='Computer Architecture'/>
                                <Course label='Computer Graphics'/>
                                <Course label='Shape Analysis'/>
                                <Course label='Computational Photography'/>
                                <Course label='Compuational Fabrication'/>
                                <Course label='Computer Vision'/>
                                <Course label='Oral Communication'/>
                                <Course label='Intro to Machine Learning'/>
                                <Course label='Computer Systems Engineering'/>
                                <Course label='Network Theory'/>
                                <Course label='Intro to Algorithms'/>
                                <Course label='Fundamentals of Programming'/>
                                <Course label='Intro to EECS: Robotics'/>
                            </React.Fragment>
                            <React.Fragment>{/* Mathematics */}
                                <Course label='Linear Algebra'/>
                                <Course label='Differential Equations'/>
                                <Course label='Multivariable Calculus'/>
                                <Course label='Probability & Random Variables'/>
                                <Course label='Discrete Math for Computer Science'/>
                                <Course label='Calculus'/>
                            </React.Fragment>
                            <React.Fragment>{/* Design */}
                                <Course label='Design Computation: 3D Modeling'/>
                                <Course label='Information & Interaction Design'/>
                                <Course label='Intro to Architecture Design'/>
                                <Course label='Architecture in Motion Graphics'/>
                            </React.Fragment>
                            <React.Fragment>{/* Natural Sciences */}
                                <Course label='Physics: Mechanics'/>
                                <Course label='Physics: Electricity & Magnetism'/>
                                <Course label='Chemistry'/>
                                <Course label='Biology'/>
                            </React.Fragment>
                            <React.Fragment>{/* Music */}
                                <Course label='Tonal Music Composition'/>
                                <Course label='Harmony & Counterpoint II'/>
                                <Course label='Harmony & Counterpoint I'/>
                                <Course label='Intro to Musical Composition'/>
                                <Course label='Intro to Western Music'/>
                            </React.Fragment>
                        </Categories>
                    </Container>
                </Partition>
                <Space/>
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
                    <Typography>
                        {this.props.label}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {this.props.children}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withTheme(Courses);