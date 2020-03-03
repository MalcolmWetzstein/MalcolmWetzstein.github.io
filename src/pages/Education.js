import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { Typography, withTheme } from '@material-ui/core';
import { Page, Suggestions, Title, Space, DateRange, Timeline, TimelineTile } from '../components/Custom';
import { Home, Courses, Experience } from './Pages';
import * as CONSTANTS from '../Constants';

class Education extends CustomComponent
{
    static buttonText = "Education";
    
    render ()
    {
        return (
            <Page
                pageDeque={this.props.pageDeque}
                maxWidth='md'
            >
                <Title>
                    {Education.buttonText}
                </Title>
                <Space size='lg'/>
                <Timeline>
                    <TimelineTile
                        image={CONSTANTS.IMAGES.LOGO.MIT}
                        imageInfo='Massachusetts Institute of Technology'
                        imageWidth='100px'
                        imageHeight='50px'
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
                            school='Massachusetts Institute of Technology'
                            city='Cambridge'
                            state='MA'
                            degree='MEng in Electrical Engineering and Computer Science'
                        />
                    </TimelineTile>
                    <TimelineTile
                        image={CONSTANTS.IMAGES.LOGO.MIT}
                        imageInfo='Massachusetts Institute of Technology'
                        imageWidth='100px'
                        imageHeight='50px'
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
                            school='Massachusetts Institute of Technology'
                            city='Cambridge'
                            state='MA'
                            degree='BS in Computer Science and Engineering'
                        />
                    </TimelineTile>
                </Timeline>
                <Space size='lg'/>
                <Suggestions labels={['experience', 'courses', 'home']}>
                    <Experience/>
                    <Courses/>
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

export default withTheme(Education);