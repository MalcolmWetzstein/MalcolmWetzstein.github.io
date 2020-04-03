import React from 'react';
import { withTheme, Container, Typography, Button } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space, YoutubeEmbed } from '../../components';
import { Portfolio, Experience } from '..';
import { PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class StarLogo extends CustomComponent
{
    render()
    {
        return (
            <Page
                id='starLogo'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    Master's Thesis: <i>Custom and Interactive Environments in <b>{CONSTANTS.NAMES.STARLOGO}</b> for Computational Modeling</i>
                </PageHeader>
                <Container maxWidth='md'>
                    <Typography>
                        For my MEng degree program in Electrical Engineering and Computer Science, I completed my master's thesis under the supervision of Eric Klopfer from
                        the <i>{CONSTANTS.NAMES.STEP.LONG}</i> at MIT. The {CONSTANTS.NAMES.STEP.SHORT} conducts research in education technology in order to create playful, 
                        powerful learning experiences. 
                    </Typography>
                    <Space size='xs'/>
                    <Typography>
                        My involvement with the {CONSTANTS.NAMES.STEP.SHORT} began during my undergraduate studies as a graphics programmer for 
                        the <i>{CONSTANTS.NAMES.STARLOGO}</i> project. <i>{CONSTANTS.NAMES.STARLOGO}</i> is a programming environment that allows students to create 3D 
                        games and simulations. Its focus on computational modeling and block-based language design make it an ideal tool for classroom learning for upper 
                        elementary through high school students. More about my involvement in <i>{CONSTANTS.NAMES.STARLOGO}</i> can be found under <b>Experience</b>.
                    </Typography>
                    <Space size='sm'/>
                    <Suggestions
                        pageDeque={this.props.pageDeque}
                        labels={[
                            CONSTANTS.NAMES.STEP.SHORT,
                            CONSTANTS.NAMES.STARLOGO,
                            Experience.displayText
                        ]}
                    >
                        <Button
                            href='https://education.mit.edu/'
                            target='_blank'
                        >
                        </Button>
                        <Button
                            href='https://www.slnova.org/'
                            target='_blank'
                        >
                        </Button>
                        <Experience/>
                    </Suggestions>
                    <Space size='sm'/>
                    <Typography>
                        For my master's thesis, I created a game engine sub-system for <i>{CONSTANTS.NAMES.STARLOGO}</i> that renders dynamic, 3D terrain. A suite of 
                        interactive tools that I designed allow for a variety of environments to be created by users by editing an underlying grid of terrain 
                        patches. Users can adjust the size of the terrain and density of patches to match the performance capabilities of their computer or device and 
                        achieve sufficient visual quality.
                    </Typography>
                    <Space size='sm'/>
                    <YoutubeEmbed
                        title='Terrain Editor'
                        src={CONSTANTS.VIDEO.PORTFOLIO.STARLOGO.EDITOR}
                    />
                    <Space size='md'/>
                    <Typography>
                        Another feature of the terrain system that I designed is the capability of <i>{CONSTANTS.NAMES.STARLOGO}</i> agents to programmatically interact 
                        with the terrain. Users can program agents to add or remove material from a terrain patch. This allows for phenomenon such as erosion to be simulated 
                        in <i>{CONSTANTS.NAMES.STARLOGO}</i>. In conjunction with the terrain editor, users can setup various starting conditions for simulations involving 
                        agent-terrain interaction.
                    </Typography>
                    <Space size='sm'/>
                    <YoutubeEmbed
                        title='Grid-Aligned Interaction'
                        src={CONSTANTS.VIDEO.PORTFOLIO.STARLOGO.YANK_GRID}
                    />
                    <Space size='md'/>
                    <Typography>
                        The grid-aligned interaction of agents with the terrain by adding or removing material from the terrain patch beneath them allows for conservation of
                        mass, ideal for accurate simulations. By relaxing the constraint for strict conservation of mass, agents can also interact with the terrain at arbitrary,
                        continuous locations instead of interacting with the patch aligned grid. This results in more organic alterations to the terrain at the cost of some error
                        in conservation of mass.
                    </Typography>
                    <Space size='sm'/>
                    <YoutubeEmbed
                        title='Unaligned Interaction'
                        src={CONSTANTS.VIDEO.PORTFOLIO.STARLOGO.YANK_CONTINUOUS}
                    />
                    <Space size='lg'/>
                    <Typography align='center'>
                        The terrain sub-system is slated for release in a future version of <i>{CONSTANTS.NAMES.STARLOGO}</i>. 
                    </Typography>
                    <Typography align='center'>
                        A publication of my thesis will be available later this summer.
                    </Typography>
                </Container>
                <Space size='lg'/>
                <Suggestions labels={[CONSTANTS.BACK_BUTTON_TEXT]}>
                    <Portfolio/>
                </Suggestions>
            </Page>
        );
    }
}

StarLogo.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(StarLogo);