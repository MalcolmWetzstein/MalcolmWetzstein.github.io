import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { Typography, withTheme, Card, CardContent, Grid, CardMedia, Box, Divider } from '@material-ui/core';
import { Page, Partition, Suggestions, Indent, Space, Bullets, DateRange } from '../components/Custom';
import { Home, Courses, Experience } from './Pages';
import * as CONSTANTS from '../Constants';

class Education extends CustomComponent
{
    static buttonText = "Education";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Indent>
                        <Typography variant={CONSTANTS.TITLE_VARIANT}>
                            Education
                        </Typography>
                    </Indent>
                    <Grid container direction='row' spacing={CONSTANTS.UNIT_INDENT} justify='center' alignItems='flex-start'>
                        <Grid item xs={6}>
                            <Degree 
                                startMonth={6}
                                startYear={2018}
                                endMonth={9}
                                endYear={2019}
                                school='Massachusetts Institute of Technology'
                                city='Cambridge'
                                state='MA'
                                degree='MEng in Electrical Engineering and Computer Science'
                                info={[
                                    [
                                        'Thesis Project',
                                        'Custom and Interactive Environments in StarLogo Nova for Computational Modeling'
                                    ],
                                    [
                                        'Concentration in Computer Graphics',
                                        '3D Rendering & Animation',
                                        'Shape Analysis (Digital Geometry)',
                                        'Computational Photography (Image Processing)',
                                        'Computer Vision',
                                        'Computational Fabrication'
                                    ],
                                    '5.0 GPA'
                                ]}
                                graphic={CONSTANTS.IMAGES.MIT.LOGO}
                                graphicInfo='Massachusetts Institute of Technology'
                                graphicWidth='100px'
                                graphicHeight='50px'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Degree
                                startMonth={9}
                                startYear={2014}
                                endMonth={6}
                                endYear={2018}
                                school='Massachusetts Institute of Technology'
                                city='Cambridge'
                                state='MA'
                                degree='BS in Computer Science and Engineering'
                                info={[
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
                                graphic={CONSTANTS.IMAGES.MIT.LOGO}
                                graphicInfo='Massachusetts Institute of Technology'
                                graphicWidth='100px'
                                graphicHeight='50px'
                            />
                        </Grid>
                    </Grid>
                </Partition>
                <Space level={2}>
                    <Suggestions labels={['courses', 'experience', 'home']}>
                        <Courses/>
                        <Experience/>
                        <Home/>
                    </Suggestions>
                </Space>
            </Page>
        );
    }
}

class Degree extends CustomComponent
{
    render()
    {
        return(
            <Card variant='outlined'>
                <CardContent>
                    <Grid container justify='space-around' direction='row'>
                        <Box>
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
                        </Box>
                        <Box margin='auto 0'>
                            <CardMedia 
                                image={this.props.graphic}
                                title={this.props.graphicInfo}
                                style={{ width: this.props.graphicWidth, height: this.props.graphicHeight }}
                            />
                        </Box>
                    </Grid>
                </CardContent>
                <Divider/>
                <CardContent>
                    <Bullets focus bullets={this.props.info}/>
                </CardContent>
            </Card>
        );
    }
}

export default withTheme(Education);