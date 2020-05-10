import React from 'react';
import { withTheme, Typography } from '@material-ui/core';
import { CustomComponent, Page, Space, Suggestions, PageHeader } from '../../components';
import { Home, Experience, Portfolio } from '..';
import { PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class About extends CustomComponent 
{
    static displayText = CONSTANTS.ABOUT_DISPLAY_TEXT;
    
    render()
    {
        return (
            <Page
                id='about'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    {About.displayText}
                </PageHeader>
                <Typography>
                    My interest in computer graphics stems from an early interest in storytelling in digital media. At age 13 video games made me aware that technology enables us to tell stories that can't be told otherwise; I knew I had to take up programming to become a part of that. Motivated by my experience playing <i>Metroid: Zero Mission</i>, I immediately took up C++ as my first programming language and a few years later started learning computer graphics programming from the book <i>Introduction to DirectX 11</i> by Frank D. Luna. Since then I have also developed an interest in creative applications of technology in film and animation. 
                </Typography>
                <Space size='sm'/>
                <Typography>
                    Taking up graphics programming at 15 broadened my interests beyond video games and introduced me to a field of study that I find both fascinating and challenging, cementing my interest in computer science before I had even begun thinking about college. At MIT I took full advantage of available opportunities to explore the field of computer graphics beyond the 3D graphics rasterization pipeline. Technology in storytelling has remained a primary motivation in my study of computer graphics. I also took courses in architecture, design, and music to develop my sense of aesthetics and hopefully connect it to my chosen field of study in the future.
                </Typography>
                <Space size='lg'/>
                <Suggestions labels={[Portfolio.displayText, Experience.displayText, Home.displayText]}>
                    <Portfolio/>
                    <Experience/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

About.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(About);