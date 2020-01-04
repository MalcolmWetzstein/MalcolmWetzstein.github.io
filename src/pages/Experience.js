import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography, Grid, Card, CardContent, CardMedia, Box, Divider, Container } from '@material-ui/core';
import { Page, Partition, Indent, Space, Suggestions, reKey, renderDateRange } from '../components/Custom';
import { Education, Skills, Home } from '../pages/Pages';
import * as CONSTANTS from '../Constants';

class Experience extends CustomComponent 
{
    static buttonText = "Experience";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Indent>
                        <Typography variant={CONSTANTS.TITLE_VARIANT}>
                            Experience
                        </Typography>
                    </Indent>
                    <Grid container direction='column' spacing={CONSTANTS.UNIT_SPACE} justify='center' alignItems='center'>
                        <Grid item xs={12}>
                            <Employment
                                startMonth={11}
                                startYear={2019}
                                title='Full-Stack Developer'
                                company='Servco Pacific'
                                department='Digital Strategy Team'
                                graphic={CONSTANTS.IMAGES.SERVCO.LOGO}
                                graphicInfo='Servco Pacific'
                                graphicWidth='100px'
                                graphicHeight='100px'
                                info={[
                                    
                                ]}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Employment
                                startMonth={1}
                                startYear={2015}
                                endMonth={8}
                                endYear={2019}
                                title='Student Software Developer'
                                company='MIT Scheller Teacher Education Program'
                                department='StarLogo Nova Project'
                                graphic={CONSTANTS.IMAGES.STEP.LOGO}
                                graphicInfo='Scheller Teacher Education Program'
                                graphicWidth='150px'
                                graphicHeight='100px'
                                info={[
                                    [
                                        'Rearchitected and optimized WebGL 3D rendering engine',
                                        'Instanced rendering technique, up to 10,000+ agents at interactive framerates',
                                        'Batched by shader program',
                                        'Located and fixed platform-specific bugs'
                                    ],
                                    [
                                        'Created fallback rendering engine for users with low-end hardware',
                                        'Key feature needed to reach target audience in India and US schools with older hardware',
                                        'Created software rasterization pipeline from scratch',
                                        'Optimized by pre-rendering perspective correct sprites'
                                    ],
                                    [
                                        'Created interactive terrain engine',
                                        'Designed 9 tools for interactive user editing of custom terrain',
                                        'User programmable real-time interactions between game agents and terrain'
                                    ],
                                    [
                                        'Created asset pipeline for user uploaded 3D models',
                                        'Transforms vertex data from various sources to engine coordinate system',
                                        'UI provides user guidance to process'
                                    ],
                                    ['Located and fixed bugs throughout codebase from past developers’ work']
                                ]}
                            />
                        </Grid>
                    </Grid>
                </Partition>
                <Space level={2}>
                    <Suggestions labels={['education', 'skills', 'home']}>
                        <Education/>
                        <Skills/>
                        <Home/>
                    </Suggestions>
                </Space>
            </Page>
        );
    }
}

class Employment extends CustomComponent
{
    render()
    {
        return (
            <Card variant='outlined'>
                <CardContent>
                    <Grid container justify='space-between' direction='row'>
                        <Box>
                            {renderDateRange(this.props.startMonth, this.props.startYear, this.props.endMonth, this.props.endYear)}
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
                    <Container maxWidth='md'>
                        {this.renderInfo()}
                    </Container>
                </CardContent>
            </Card>
        );
    }

    renderInfo()
    {
        return this.props.info ? 
            reKey(this.props.info.map(
                            info => { 
                                return (
                                    <ul>
                                        <li>
                                            {Array.isArray(info) ? info[0] : info}
                                            {Array.isArray(info) ? info.map((subInfo, index) => index > 0 ? <ul><li>{subInfo}</li></ul> : undefined) : undefined}
                                        </li>
                                    </ul>
                                );
                            }
                        )
                ) : undefined;
    }
}

export default withTheme(Experience);