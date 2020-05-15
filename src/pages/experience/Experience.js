import React from 'react';
import { withTheme } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Space, Suggestions, Timeline, TimelineTile } from '../../components';
import { Education, Skills, Home } from '..';
import { Employment } from '.';
import { PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

class Experience extends CustomComponent 
{
    static displayText = CONSTANTS.EXPERIENCE_DISPLAY_TEXT;
    
    render()
    {
        return (
            <Page
                id='experience'
                pageDeque={this.props.pageDeque}
                maxWidth='md'
            >
                <PageHeader>
                    {Experience.displayText}
                </PageHeader>
                <Timeline>
                    <TimelineTile
                        image={CONSTANTS.IMAGES.LOGO.SERVCO}
                        imageInfo={CONSTANTS.NAMES.SERVCO}
                        details={[
                            'Virtual Reality and Augmented Reality prototyping',
                            [
                                'Implemented Servco Vehicle Valuation web app',
                                'Frontend UI/UX development with React; architected reusable framework for managing state in single page apps',
                                'Backend development with Express; created secure server for accessing Kelley Blue Book API and customer data'
                            ],
                            'Light management experience directing app developer interns',
                            [
                                'Collaborated with interdisciplinary team using Agile workflow and Jira',
                                'Software Engineers',
                                'UX/UI Designers',
                                'Product Managers',
                                'Marketing Specialists',
                                'Data Specialists',
                            ],
                            [
                                'Azure DevOps experience',
                                'Continuous Integration/Continuous Deployment (CI/CD) Setup',
                                'Git collaboration using pull requests'
                            ],
                            'Google Optimize and Google Analytics experience',
                            'Salesforce SFRA development experience'
                        ]}
                    >
                        <Employment
                            startMonth={11}
                            startYear={2019}
                            title='Full-Stack Software Engineer'
                            company={CONSTANTS.NAMES.SERVCO}
                            department='Digital Strategy Team'
                        />
                    </TimelineTile>
                    <TimelineTile
                        image={CONSTANTS.IMAGES.LOGO.STEP}
                        imageInfo={CONSTANTS.NAMES.STEP.LONG}
                        details={[
                            [
                                'Rearchitected and optimized WebGL 3D rendering engine',
                                'Instanced rendering technique, up to 100,000+ agents at interactive framerates',
                                'Located and fixed platform-specific bugs'
                            ],
                            [
                                'Created fallback rendering engine for users with low-end hardware',
                                'Key feature needed to reach target audience in India and US schools with older hardware',
                                'Created software rasterization pipeline from scratch',
                                'Optimized by pre-rendering perspective correct sprites'
                            ],
                            [
                                'Created terrain system with interactive editor',
                                'Designed 9 different tools for user interactive terrain editing',
                                'User programmable real-time interactions between game agents and terrain'
                            ],
                            [
                                'Created asset pipeline and UI for users to add their own 3D models',
                                'Handles OBJ and Collada formats with or without albedo textures and material colors',
                                'User guided process resolves issues with coordinate system and winding order conventions'
                            ]
                        ]}
                    >
                        <Employment
                            startMonth={1}
                            startYear={2015}
                            endMonth={8}
                            endYear={2019}
                            title='Student Software Developer (Graphics Programmer)'
                            company={'MIT ' + CONSTANTS.NAMES.STEP.LONG}
                            department={CONSTANTS.NAMES.STARLOGO + ' Project'}
                        />
                    </TimelineTile>
                </Timeline>
                <Space size='lg'/>
                <Suggestions labels={[Skills.displayText, Education.displayText, Home.displayText]}>
                    <Skills/>
                    <Education/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

Experience.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(Experience);