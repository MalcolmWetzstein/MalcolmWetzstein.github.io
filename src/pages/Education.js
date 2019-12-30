import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { Typography, withTheme, Card, CardContent, Container } from '@material-ui/core';
import { Page, Partition, Suggestions, Indent, Group } from '../components/Custom';
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
                    <Container>
                        <Degree 
                            dates='06-2018 &mdash; 09-2019'
                            school='Massachusetts Institute of Technology, Cambridge, MA'
                            degree='MEng in Electrical Engineering and Computer Science'
                            info={['Thesis: Custom and Interactive Environments in StarLogo Nova for Computational Modeling', '5.0 GPA']}
                        />
                        <Degree 
                            dates='09-2014 &mdash; 06-2018'
                            school='Massachusetts Institute of Technology, Cambridge, MA'
                            degree='BS in Computer Science and Engineering'
                            info={['4.7 GPA']}
                        />
                    </Container>
                </Partition>
            </Page>
        );
    }
}

class Degree extends CustomComponent
{
    render()
    {
        return(
            <Card>
                <CardContent>
                    <Typography variant='subtitle2' color='textSecondary'>
                        {this.props.dates}
                    </Typography>
                    <Typography variant='h6'>
                        {this.props.school}
                    </Typography>
                    <Typography variant='subtitle1'>
                        {this.props.degree}
                    </Typography>
                    <Typography variant='caption' color='textSecondary'>
                        {this.renderInfo()}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

    renderInfo()
    {
        return this.props.info ? (
                <ul>
                    {this.props.info.map(child => <li>{child}</li>)}
                </ul>
            ) : undefined;
    }
}

export default withTheme(Education);