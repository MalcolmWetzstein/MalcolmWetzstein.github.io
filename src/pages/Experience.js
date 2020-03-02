import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography, Card, CardContent, CardActionArea, CardMedia, Box, Divider, Collapse } from '@material-ui/core';
import { Page, Title, Space, Suggestions, Bullets, DateRange } from '../components/Custom';
import { Education, Skills, Home } from '../pages/Pages';
import * as CONSTANTS from '../Constants';

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Experience extends CustomComponent 
{
    static buttonText = "Experience";
    
    render ()
    {
        return (
            <Page
                pageDeque={this.props.pageDeque}
                maxWidth='md'
            >
                <Title>
                    {Experience.buttonText}
                </Title>
                <Space size='lg'/>
                <Employment
                    startMonth={11}
                    startYear={2019}
                    title='Full-Stack Software Engineer (Temporary)'
                    company='Servco Pacific'
                    department='Digital Strategy Team'
                    graphic={CONSTANTS.IMAGES.LOGO.SERVCO}
                    graphicInfo='Servco Pacific'
                    graphicWidth='100px'
                    graphicHeight='100px'
                    info={[
                        'Virtual Reality and Augmented Reality prototyping',
                        [
                            'Implemented Servco Vehicle Valuation web app',
                            'Frontend UI/UX development with React; architected reusable framework for managing state in single page apps',
                            'Backend development with Express; created secure server for accessing Kelley Blue Book API and customer data'
                        ],
                        'Light management experience directing app developer interns',
                        [
                            'Collaborated with interdisciplinary team using Agile workflow and Jira',
                            'Software Engineers',
                            'UX/UI Designers',
                            'Product Managers',
                            'Marketing Specialists',
                            'Data Specialists',
                        ],
                        [
                            'Azure DevOps experience',
                            'Continuous Integration/Continuous Deployment (CI/CD) Setup',
                            'Git collaboration using pull requests'
                        ],
                        'Google Optimize, Google Analytics, and Salesforce Marketing Cloud experience'
                    ]}
                />
                <Space size='md'/>
                <Employment
                    startMonth={1}
                    startYear={2015}
                    endMonth={8}
                    endYear={2019}
                    title='Student Software Developer (Graphics Programmer)'
                    company='MIT Scheller Teacher Education Program'
                    department='StarLogo Nova Project'
                    graphic={CONSTANTS.IMAGES.LOGO.STEP}
                    graphicInfo='Scheller Teacher Education Program'
                    graphicWidth='150px'
                    graphicHeight='100px'
                    info={[
                        [
                            'Rearchitected and optimized WebGL 3D rendering engine',
                            'Instanced rendering technique, up to 100,000+ agents at interactive framerates',
                            'Located and fixed platform-specific bugs'
                        ],
                        [
                            'Created fallback rendering engine for users with low-end hardware',
                            'Key feature needed to reach target audience in India and US schools with older hardware',
                            'Created software rasterization pipeline from scratch',
                            'Optimized by pre-rendering perspective correct sprites'
                        ],
                        [
                            'Created terrain engine with interactive editor',
                            'Designed 9 different tools for interactive user editing of custom terrain',
                            'User programmable real-time interactions between game agents and terrain'
                        ],
                        [
                            'Created asset pipeline and UI for users to add their own 3D models',
                            'Handles OBJ and Collada formats with or without albedo textures and material colors',
                            'User guided process resolves issues with coordinate system and winding order conventions'
                        ]
                    ]}
                />
                <Space size='lg'/>
                <Suggestions labels={['skills', 'education', 'home']}>
                    <Skills/>
                    <Education/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

class Employment extends CustomComponent
{
    constructor(props) {
        super(props);

        this.state = { open: false }

        this.onClick = this.onClick.bind(this);
    }

    render()
    {
        return (
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
                                    {this.props.title}
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {this.props.company}
                                </Typography>
                                <Typography variant='subtitle2'>
                                    {(this.props.department ? this.props.department : '')}
                                </Typography>
                            </Box>
                            <Box margin='auto 0'>
                                <CardMedia 
                                    image={this.props.graphic}
                                    title={this.props.graphicInfo}
                                    style={{ width: this.props.graphicWidth, height: this.props.graphicHeight, right: '0px'}}
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

export default withTheme(Experience);