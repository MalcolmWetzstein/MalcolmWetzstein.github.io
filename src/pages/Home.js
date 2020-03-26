import React from 'react';
import { Typography, withTheme, Button, Box, Divider, Grid } from '@material-ui/core';
import { CustomComponent, Page, Suggestions, Space, NavigationButton, Center, ScrollToButton } from '../components';
import { About, Portfolio, Education, Experience, Skills, Contact } from '.';
import { reKey } from '../components/Util';
import * as CONSTANTS from '../Constants';

class Home extends CustomComponent 
{
    static buttonText = "Home";

    constructor(props) {
        super(props);

        this.moreRef = React.createRef();
    }
    
    render ()
    {
        return (
            <Page
                id='home'
                pageDeque={this.props.pageDeque}
            >
                <Typography variant="h1" align="center" gutterBottom>
                    Malcolm<br/>
                    Xavier<br/>
                    Wetzstein
                </Typography>
                {
                    this.renderCareerTitles([
                        'Recent Graduate',
                        'Software Engineer',
                        'Graphics Programmer',
                        'Aspiring Game Developer'
                    ])
                }
                <Space/>
                <Divider/>
                <Space/>
                <Suggestions pageDeque={this.props.pageDeque} labels={['about me', 'more']}>
                    <About/>
                    {ScrollToButton(this.moreRef)}
                </Suggestions>
                <Space size='xl'/>
                <Center>
                    <Box
                        maxWidth={this.props.theme.spacing(CONSTANTS.UNIT_INDENT*6)}
                        ref={this.moreRef}
                    >
                        <NavigationButton label='About Me' pageDeque={this.props.pageDeque}>
                            <About/>
                        </NavigationButton>
                        <NavigationButton label='Portfolio' pageDeque={this.props.pageDeque}>
                            <Portfolio/>
                        </NavigationButton>
                        <NavigationButton label='Education' pageDeque={this.props.pageDeque}>
                            <Education/>
                        </NavigationButton>
                        <NavigationButton label='Experience' pageDeque={this.props.pageDeque}>
                            <Experience/>
                        </NavigationButton>
                        <NavigationButton label='Skills' pageDeque={this.props.pageDeque}>
                            <Skills/>
                        </NavigationButton>
                        <NavigationButton label='Contact Me' pageDeque={this.props.pageDeque}>
                            <Contact/>
                        </NavigationButton>
                        <NavigationButton label='GitHub' pageDeque={this.props.pageDeque}>
                            <Button href={CONSTANTS.LINKS.GITHUB} target='_blank'/>
                        </NavigationButton>
                        <NavigationButton label='LinkedIn' pageDeque={this.props.pageDeque}>
                            <Button href={CONSTANTS.LINKS.LINKEDIN} target='_blank'/>
                        </NavigationButton>
                        <NavigationButton label='Resume' pageDeque={this.props.pageDeque}>
                            <Button href={CONSTANTS.LINKS.RESUME} target='_blank'/>
                        </NavigationButton>
                        <Space/>
                    </Box>
                </Center>
            </Page>
        );
    }

    renderCareerTitles(careerTitles)
    {
        let renderItems = [];

        for (let i = 0; i < careerTitles.length; i++)
        {
            renderItems.push(
                <Typography>
                    {careerTitles[i]}
                </Typography>
            );

            if (i < careerTitles.length - 1)
                renderItems.push(<Divider orientation='vertical'/>);
        }

        return (
            <Grid
                container
                justify='center'
                spacing={2}
            >
                {
                    reKey(renderItems.map(
                        item =>
                            <Grid item>
                                {item}
                            </Grid>
                    ))
                }
            </Grid>
        );
    }
}

export default withTheme(Home);