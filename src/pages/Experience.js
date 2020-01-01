import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography } from '@material-ui/core';
import { Page, Partition, Indent, Space, Suggestions } from '../components/Custom';
import { Education, Skills, Home } from '../pages/Pages';
import * as CONSTANTS from '../Constants';

class Experience extends CustomComponent 
{
    static buttonText = "Experience";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Indent>
                        <Typography variant={CONSTANTS.TITLE_VARIANT}>
                            Experience
                        </Typography>
                    </Indent>
                </Partition>
                <Space level={2}>
                    <Suggestions labels={['education', 'skills', 'home']}>
                        <Education/>
                        <Skills/>
                        <Home/>
                    </Suggestions>
                </Space>
            </Page>
        );
    }
}

export default withTheme(Experience);