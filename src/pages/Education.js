import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { Typography, withTheme, Card, CardContent, CardActionArea, CardMedia, Box, Divider, Collapse } from '@material-ui/core';
import { Page, Suggestions, Title, Space, Bullets, DateRange } from '../components/Custom';
import { Home, Courses, Experience } from './Pages';
import * as CONSTANTS from '../Constants';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
                            '3D Rendering & Animation Algorithms',
                            'Physically-Based Simulation',
                            'Geometry Processing',
                            'Computational Photography (Image Processing)',
                            'Computer Vision',
                            'Computational Fabrication'
                        ],
                        '5.0 GPA'
                    ]}
                    graphic={CONSTANTS.IMAGES.LOGO.MIT}
                    graphicInfo='Massachusetts Institute of Technology'
                    graphicWidth='100px'
                    graphicHeight='50px'
                />
                <Space size='md'/>
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
                    graphic={CONSTANTS.IMAGES.LOGO.MIT}
                    graphicInfo='Massachusetts Institute of Technology'
                    graphicWidth='100px'
                    graphicHeight='50px'
                />
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
    constructor(props) {
        super(props);

        this.state = { open: false }

        this.onClick = this.onClick.bind(this);
    }
    
    render()
    {
        return(
            <Card variant='outlined'>
                <CardActionArea
                    onClick={this.onClick}
                    disableRipple
                >
                    <CardContent>
                        <Box
                            display='flex'
                            justifyContent='space-between'
                        >
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
                        </Box>
                        <Space size='xs'/>
                        {this.state.open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                    </CardContent>
                </CardActionArea>
                <Collapse in={this.state.open}>
                    <Divider/>
                    <CardContent>
                        <Bullets focus bullets={this.props.info}/>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }

    onClick() {
        this.setState({ open: !this.state.open })
    }
}

export default withTheme(Education);