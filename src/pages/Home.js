import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { Typography, withTheme, Button, Box, Divider } from '@material-ui/core';
import { Page, Suggestions, Space, NavigationButton, Center, ScrollToButton } from '../components/Custom';
import { About, Portfolio, Education, Experience, Skills, Contact } from './Pages';
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
                <Typography variant="subtitle1" align="center">
                    Recent Master Graduate in Computer Science
                </Typography>
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
                            <Button href={CONSTANTS.LINKS.RESUME} download/>
                        </NavigationButton>
                        <Space/>
                    </Box>
                </Center>
            </Page>
        );
    }
}

export default withTheme(Home);