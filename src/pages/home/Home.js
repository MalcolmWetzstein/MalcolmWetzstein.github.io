import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withTheme, Divider, Grid, Hidden, List, ListSubheader } from '@material-ui/core';
import { CustomComponent, Page, Suggestions, Space, NavigationButton, ScrollToButton, ContactMethod } from '../../components';
import { About, Portfolio, Education, Experience, Skills } from '..';
import { reKey, PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

class Home extends CustomComponent 
{
    static displayText = CONSTANTS.HOME_DISPLAY_TEXT;

    constructor(props)
    {
        super(props);

        this.moreRef = React.createRef();
        this.contactRef = React.createRef();
    }
    
    render()
    {
        return (
            <Page
                id='home'
                pageDeque={this.props.pageDeque}
                bottomRef={this.contactRef}
            >
                <Typography
                    variant='h2'
                    component='h1'
                    align='center'
                    gutterBottom
                >
                    Malcolm<br/>
                    Xavier<br/>
                    Wetzstein
                </Typography>
                {
                    this.renderCareerTitles([
                        'Recent Master Graduate',
                        'Graphics Programmer',
                        'Software Engineer'
                    ])
                }
                <Space/>
                <Divider/>
                <Space/>
                <Suggestions
                    pageDeque={this.props.pageDeque}
                    labels={[About.displayText, 'Contact', 'more']}
                >
                    <About/>
                    {ScrollToButton(this.contactRef)}
                    {ScrollToButton(this.moreRef)}
                </Suggestions>
                <Space size='lg'/>
                <Grid container justify='space-evenly'>
                    <Grid item>
                        {this.renderPageLinks()}
                        <Hidden smUp>
                            <Space size='sm'/>
                        </Hidden>
                    </Grid>
                    <Grid item>
                        {this.renderExternalLinks()}
                    </Grid>
                </Grid>
            </Page>
        );
    }

    renderCareerTitles(careerTitles)
    {
        let renderItems = [];

        for (let i = 0; i < careerTitles.length; i++)
        {
            renderItems.push(
                <Grid item>
                    <Typography>
                        {careerTitles[i]}
                    </Typography>
                </Grid>
            );

            if (i < careerTitles.length - 1)
                renderItems.push(
                    <Hidden xsDown>
                        <Grid item>
                            <Divider orientation='vertical'/>
                        </Grid>
                    </Hidden>
                );
        }

        return (
            <Grid
                container
                justify='center'
                spacing={CONSTANTS.HOME_CAREER_TITLES_SPACING}
            >
                {reKey(renderItems)}
            </Grid>
        );
    }

    renderPageLinks()
    {
        return (
            <List subheader={<ListSubheader>Overview</ListSubheader>} ref={this.moreRef}>
                <Divider light/>
                <NavigationButton
                    listItem
                    label={About.displayText}
                    pageDeque={this.props.pageDeque}
                >
                    <About/>
                </NavigationButton>
                <NavigationButton
                    listItem
                    label={Portfolio.displayText}
                    pageDeque={this.props.pageDeque}
                >
                    <Portfolio/>
                </NavigationButton>
                <NavigationButton
                    listItem
                    label={Education.displayText}
                    pageDeque={this.props.pageDeque}
                >
                    <Education/>
                </NavigationButton>
                <NavigationButton
                    listItem
                    label={Experience.displayText}
                    pageDeque={this.props.pageDeque}
                >
                    <Experience/>
                </NavigationButton>
                <NavigationButton
                    listItem
                    label={Skills.displayText}
                    pageDeque={this.props.pageDeque}
                >
                    <Skills/>
                </NavigationButton>
            </List>
        );
    }

    renderExternalLinks()
    {
        return (
            <List>
                <NavigationButton
                    listItem
                    icon={<GitHubIcon/>}
                    label={CONSTANTS.NAMES.GITHUB}
                    href={CONSTANTS.LINKS.GITHUB}
                    pageDeque={this.props.pageDeque}
                />
                <NavigationButton
                    listItem
                    icon={<LinkedInIcon/>}
                    label={CONSTANTS.NAMES.LINKEDIN}
                    href={CONSTANTS.LINKS.LINKEDIN}
                    pageDeque={this.props.pageDeque}
                />
                <NavigationButton
                    listItem
                    icon={<DescriptionIcon/>}
                    label='Resume'
                    href={CONSTANTS.DOCUMENTS.RESUME}
                    pageDeque={this.props.pageDeque}
                />
                <Divider light/>
                <ContactMethod
                    icon={<EmailIcon/>}
                    label='Email'
                    contactHref={'mailto:' + CONSTANTS.EMAIL_ADDRESS}
                    contactDisplay={CONSTANTS.EMAIL_ADDRESS}
                />
                <ContactMethod
                    icon={<PhoneIcon/>}
                    label='Phone'
                    contactHref={'tel:' + CONSTANTS.PHONE_NUMBER}
                    contactDisplay={this.renderPhoneNumber(CONSTANTS.PHONE_NUMBER)}
                />
            </List>
        );
    }

    renderPhoneNumber(phoneNumber)
    {
        return '(' + phoneNumber.slice(0,3) + ') ' + phoneNumber.slice(3,6) + '-' + phoneNumber.slice(6);
    }
}

Home.propTypes = {
    theme: PropTypes.object.isRequired,
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(Home);