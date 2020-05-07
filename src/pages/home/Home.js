import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withTheme, Box, Divider, Grid } from '@material-ui/core';
import { CustomComponent, Page, Suggestions, Space, NavigationButton, Center, ScrollToButton } from '../../components';
import { About, Portfolio, Education, Experience, Skills, Contact } from '..';
import { reKey, PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class Home extends CustomComponent 
{
    static displayText = CONSTANTS.HOME_DISPLAY_TEXT;

    constructor(props)
    {
        super(props);

        this.moreRef = React.createRef();
    }
    
    render()
    {
        return (
            <Page
                id='home'
                pageDeque={this.props.pageDeque}
            >
                <Typography
                    variant='h1'
                    align='center'
                    gutterBottom
                >
                    Malcolm<br/>
                    Xavier<br/>
                    Wetzstein
                </Typography>
                {
                    this.renderCareerTitles([
                        'Recent Graduate',
                        'Graphics Programmer',
                        'Software Engineer'
                    ])
                }
                <Space/>
                <Divider/>
                <Space/>
                <Suggestions
                    pageDeque={this.props.pageDeque}
                    labels={[About.displayText, 'more']}
                >
                    <About/>
                    {ScrollToButton(this.moreRef)}
                </Suggestions>
                <Space size='md'/>
                <Center>
                    <Box
                        maxWidth={this.props.theme.spacing(CONSTANTS.HOME_LINK_BUTTONS_WIDTH)}
                        ref={this.moreRef}
                    >
                        <NavigationButton
                            label={About.displayText}
                            pageDeque={this.props.pageDeque}
                        >
                            <About/>
                        </NavigationButton>
                        <NavigationButton
                            label={Portfolio.displayText}
                            pageDeque={this.props.pageDeque}
                        >
                            <Portfolio/>
                        </NavigationButton>
                        <NavigationButton
                            label={Education.displayText}
                            pageDeque={this.props.pageDeque}
                        >
                            <Education/>
                        </NavigationButton>
                        <NavigationButton
                            label={Experience.displayText}
                            pageDeque={this.props.pageDeque}
                        >
                            <Experience/>
                        </NavigationButton>
                        <NavigationButton
                            label={Skills.displayText}
                            pageDeque={this.props.pageDeque}
                        >
                            <Skills/>
                        </NavigationButton>
                        <NavigationButton
                            label={Contact.displayText}
                            pageDeque={this.props.pageDeque}
                        >
                            <Contact/>
                        </NavigationButton>
                        <NavigationButton
                            label={CONSTANTS.NAMES.GITHUB}
                            href={CONSTANTS.LINKS.GITHUB}
                            pageDeque={this.props.pageDeque}
                        />
                        <NavigationButton
                            label={CONSTANTS.NAMES.LINKEDIN}
                            href={CONSTANTS.LINKS.LINKEDIN}
                            pageDeque={this.props.pageDeque}
                        />
                        <NavigationButton
                            label='Resume'
                            href={CONSTANTS.DOCUMENTS.RESUME}
                            pageDeque={this.props.pageDeque}
                        />
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
                spacing={CONSTANTS.HOME_CAREER_TITLES_SPACING}
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

Home.propTypes = {
    theme: PropTypes.object.isRequired,
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(Home);