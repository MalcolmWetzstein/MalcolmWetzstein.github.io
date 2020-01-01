import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography } from '@material-ui/core';
import { Page, Partition, Indent, Space, Suggestions } from '../components/Custom';
import { Home, Skills, Courses } from './Pages';
import * as CONSTANTS from '../Constants';

class Projects extends CustomComponent 
{
    static buttonText = "Projects";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Indent>
                        <Typography variant={CONSTANTS.TITLE_VARIANT}>
                            Projects
                        </Typography>
                    </Indent>
                </Partition>
                <Space level={2}>
                    <Suggestions labels={['skills', 'courses', 'home']}>
                        <Skills/>
                        <Courses/>
                        <Home/>
                    </Suggestions>
                </Space>
            </Page>
        );
    }
}

export default withTheme(Projects);