import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { Typography, withTheme, Card, CardContent, Grid, CardMedia, Box } from '@material-ui/core';
import { Page, Partition, Suggestions, Indent, Space, reKey, Columns } from '../components/Custom';
import { Home, Courses, Projects } from './Pages';
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
                                info={['Thesis: Custom and Interactive Environments in StarLogo Nova for Computational Modeling', '5.0 GPA']}
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
                                info={['4.7 GPA']}
                                graphic={CONSTANTS.IMAGES.MIT.LOGO}
                                graphicInfo='Massachusetts Institute of Technology'
                                graphicWidth='100px'
                                graphicHeight='50px'
                            />
                        </Grid>
                    </Grid>
                </Partition>
                <Space level={2}>
                    <Suggestions labels={['courses', 'projects', 'home']}>
                        <Courses/>
                        <Projects/>
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
                    <Columns justify='space-around'>
                        <React.Fragment>
                            <Typography variant='subtitle2' color='textSecondary'>
                                {this.renderDate(this.props.startMonth, this.props.startYear)}
                                &mdash;
                                {this.props.present ? 'Present' : this.renderDate(this.props.endMonth, this.props.endYear)}
                            </Typography>
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
                        <Box height={1} display='flex' alignItems='center'>
                            <CardMedia 
                                image={this.props.graphic}
                                title={this.props.graphicInfo}
                                style={{ width: this.props.graphicWidth, height: this.props.graphicHeight }}
                            />
                        </Box>
                    </Columns>
                    <Typography variant='caption' color='textSecondary'>
                        {this.renderInfo()}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    renderDate(month, year)
    {
        return (month < 10 ? '0' + month : month) + '-' + year;
    }

    renderInfo()
    {
        return this.props.info ? (
                <ul>
                    {reKey(this.props.info.map(child => <li>{child}</li>))}
                </ul>
            ) : undefined;
    }
}

export default withTheme(Education);