import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography, Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import { Page, Partition, Indent, Space, Suggestions, Columns } from '../components/Custom';
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
                        <Grid item xs={8}>
                            <Employment
                                startMonth={11}
                                startYear={2019}
                                present
                                title='Full Stack Developer'
                                company='Servco Pacific'
                                department='Digital Strategy Team'
                                graphic={CONSTANTS.IMAGES.SERVCO.LOGO}
                                graphicInfo='Servco Pacific'
                                graphicWidth='100px'
                                graphicHeight='100px'
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
            <Card>
                <CardContent>
                    <Columns>
                        <React.Fragment>
                            <Typography variant='subtitle2' color='textSecondary'>
                                {this.renderDate(this.props.startMonth, this.props.startYear)}
                                &mdash;
                                {this.props.present ? 'Present' : this.renderDate(this.props.endMonth, this.props.endYear)}
                            </Typography>
                            <Typography variant='h6'>
                                {this.props.title}
                            </Typography>
                            <Typography variant='subtitle1'>
                                {this.props.company + (this.props.department ? ', ' + this.props.department : '')}
                            </Typography>
                        </React.Fragment>
                        <CardMedia 
                            image={this.props.graphic}
                            title={this.props.graphicInfo}
                            style={{ width: this.props.graphicWidth, height: this.props.graphicHeight, right: '0px'}}
                        />
                    </Columns>
                </CardContent>
            </Card>
        );
    }

    renderDate(month, year)
    {
        return (month < 10 ? '0' + month : month) + '-' + year;
    }
}

export default withTheme(Experience);