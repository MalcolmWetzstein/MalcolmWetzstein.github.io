import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography } from '@material-ui/core';
import { Page, Partition, Indent, Space, Suggestions } from '../components/Custom';
import { Home, Projects, Education } from './Pages';
import * as CONSTANTS from '../Constants';

class Courses extends CustomComponent 
{
    static buttonText = "Courses";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Indent>
                        <Typography variant={CONSTANTS.TITLE_VARIANT}>
                            Courses
                        </Typography>
                    </Indent>
                </Partition>
                <Space/>
                <Suggestions labels={['projects', 'education', 'home']}>
                    <Projects/>
                    <Education/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(Courses);