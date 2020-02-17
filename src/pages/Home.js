import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { Typography, Link, withTheme, Grid, Container } from '@material-ui/core';
import { Page, Partition, Suggestions, Space, NavigationButton, Center } from '../components/Custom';
import { About, Portfolio, Courses, Education, Experience, Skills, Contact } from './Pages';
import * as CONSTANTS from '../Constants';

class Home extends CustomComponent 
{
    static buttonText = "Home";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <React.Fragment>
                        <Typography variant="h1" align="center" gutterBottom>
                            Malcolm<br/>
                            Xavier<br/>
                            Wetzstein
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            Recent Master Graduate in Computer Science
                        </Typography>
                        <Space level={1/3}/>
                    </React.Fragment>
                    <React.Fragment>
                        <Suggestions pageDeque={this.props.pageDeque} labels={['about me', 'resume', 'more']}>
                            <About/>
                            <Link href={CONSTANTS.LINKS.RESUME} download/>
                            <Link href='#more'/>
                        </Suggestions>
                        <Space level={3}/>
                        <Container maxWidth='sm' id='more'>
                            <Grid container justify='space-evenly'>
                                <Grid item>
                                    <Center>
                                        <NavigationButton label='About Me' pageDeque={this.props.pageDeque}>
                                            <About/>
                                        </NavigationButton>
                                    </Center>
                                </Grid>
                                <Grid item>
                                    <Center>
                                        <NavigationButton label='Portfolio' pageDeque={this.props.pageDeque}>
                                            <Portfolio/>
                                        </NavigationButton>
                                    </Center>
                                </Grid>
                                <Grid item>
                                    <Center>
                                        <NavigationButton label='Courses' pageDeque={this.props.pageDeque}>
                                            <Courses/>
                                        </NavigationButton>
                                    </Center>
                                </Grid>
                                <Grid item>
                                    <Center>
                                        <NavigationButton label='Education' pageDeque={this.props.pageDeque}>
                                            <Education/>
                                        </NavigationButton>
                                    </Center>
                                </Grid>
                                <Grid item>
                                    <Center>
                                        <NavigationButton label='Experience' pageDeque={this.props.pageDeque}>
                                            <Experience/>
                                        </NavigationButton>
                                    </Center>
                                </Grid>
                                <Grid item>
                                    <Center>
                                        <NavigationButton label='Skills' pageDeque={this.props.pageDeque}>
                                            <Skills/>
                                        </NavigationButton>
                                    </Center>
                                </Grid>
                                <Grid item>
                                    <Center>
                                        <NavigationButton label='Contact Me' pageDeque={this.props.pageDeque}>
                                            <Contact/>
                                        </NavigationButton>
                                    </Center>
                                </Grid>
                                <Grid item>
                                    <Center>
                                        <NavigationButton label='GitHub' pageDeque={this.props.pageDeque}>
                                            <Link href={CONSTANTS.LINKS.GITHUB}/>
                                        </NavigationButton>
                                    </Center>
                                </Grid>
                            </Grid>
                        </Container>
                    </React.Fragment>
                </Partition>
            </Page>
        );
    }
}

export default withTheme(Home);