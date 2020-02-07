import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography } from '@material-ui/core';
import { Page, Partition, Space, Suggestions, Title } from '../components/Custom';
import { Home, Experience, Portfolio } from './Pages';

class About extends CustomComponent 
{
    static buttonText = "About Me";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Title>
                        {About.buttonText}
                    </Title>
                    <React.Fragment>
                        <Typography>
                            My interest in computer graphics stems from an early interest in storytelling in digital media. At age 13 video games made me aware that technology enables us to tell stories that couldn’t be told otherwise; I knew I had to take up programming to become a part of that. Motivated by my experience playing <i>Metroid: Zero Mission</i>, I immediately took up C++ as my first programming language and a few years later started learning computer graphics programming from the book <i>Introduction to DirectX 11</i> by Frank D. Luna. Since then I have also developed an interest in creative applications of technology in film and animation. 
                        </Typography>
                        <Space/>
                        <Typography>
                            Taking up graphics programming at 15 drew my attention away from video games and introduced me to a field of study that I found both fascinating and challenging, cementing my interest in computer science before I had even begun thinking about college. At MIT I took full advantage of available opportunities to explore the field of computer graphics beyond the 3D graphics rasterization pipeline. Technology in storytelling has remained a primary motivation in my study of computer graphics. I also took courses in architecture, design, and music to develop my sense of aesthetics and hopefully connect it to my chosen field of study in the future.
                        </Typography>
                    </React.Fragment>
                </Partition>
                <Space/>
                <Suggestions labels={['portfolio', 'experience', 'home']}>
                    <Portfolio/>
                    <Experience/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(About);