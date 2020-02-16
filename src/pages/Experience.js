import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography, Grid, Card, CardContent, CardMedia, Box, Divider } from '@material-ui/core';
import { Page, Partition, Title, Space, Suggestions, Bullets, DateRange } from '../components/Custom';
import { Education, Skills, Home } from '../pages/Pages';
import * as CONSTANTS from '../Constants';

class Experience extends CustomComponent 
{
    static buttonText = "Experience";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center maxWidth='md'>
                    <Title>
                        {Experience.buttonText}
                    </Title>
                    <React.Fragment>
                        <Employment
                            startMonth={11}
                            startYear={2019}
                            title='Full-Stack Software Engineer (Temp)'
                            company='Servco Pacific'
                            department='Digital Strategy Team'
                            graphic={CONSTANTS.IMAGES.LOGO.SERVCO}
                            graphicInfo='Servco Pacific'
                            graphicWidth='100px'
                            graphicHeight='100px'
                            info={[
                                'VR and AR prototyping',
                                'Light management experience directing app developer interns',
                                [
                                    'Collaborated with interdisciplinary team using Agile workflow and Jira',
                                    'Software Engineers',
                                    'Product Designers (Digital)',
                                    'Product Managers',
                                    'Marketing Specialists',
                                    'Data Specialists',
                                ],
                                [
                                    'Azure DevOps experience',
                                    'Continuous Integration/Continuous Deployment (CI/CD)',
                                    'Git collaboration and pull requests'
                                ],
                                'Google Optimize, Google Analytics, and Salesforce Marketing Cloud experience'
                            ]}
                        />
                        <Employment
                            startMonth={1}
                            startYear={2015}
                            endMonth={8}
                            endYear={2019}
                            title='Student Software Developer'
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
                    </React.Fragment>
                </Partition>
                <Space/>
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
    render()
    {
        return (
            <Grid container direction='row' spacing={0} justify='center'>
                <Grid item xs={9}>
                    <Card variant='outlined'>
                        <CardContent>
                            <Grid container justify='space-between' direction='row'>
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
                                <Box height={1} display='flex' alignItems='center'>
                                    <CardMedia 
                                        image={this.props.graphic}
                                        title={this.props.graphicInfo}
                                        style={{ width: this.props.graphicWidth, height: this.props.graphicHeight, right: '0px'}}
                                    />
                                </Box>
                            </Grid>
                        </CardContent>
                        <Divider/>
                        <CardContent>
                            <Bullets focus bullets={this.props.info}/>
                        </CardContent>
                    </Card>
                    <Space/>
                </Grid>
            </Grid>
        );
    }
}

export default withTheme(Experience);