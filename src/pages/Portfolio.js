import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography } from '@material-ui/core';
import { Page, Partition, Indent, Space, Suggestions } from '../components/Custom';
import { Home, Skills, Courses } from './Pages';
import * as CONSTANTS from '../Constants';

class Portfolio extends CustomComponent 
{
    static buttonText = "Portfolio";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Indent>
                        <Typography variant={CONSTANTS.TITLE_VARIANT}>
                            {Portfolio.buttonText}
                        </Typography>
                    </Indent>
                </Partition>
                <Space/>
                <Suggestions labels={['skills', 'courses', 'home']}>
                    <Skills/>
                    <Courses/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(Portfolio);