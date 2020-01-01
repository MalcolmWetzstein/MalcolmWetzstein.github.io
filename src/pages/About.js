import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { Typography, withTheme } from '@material-ui/core';
import { Page, Partition, Indent, Space, Suggestions } from '../components/Custom';
import { Home, Experience, Education } from './Pages';
import * as CONSTANTS from '../Constants';

class About extends CustomComponent 
{
    static buttonText = "About";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Indent>
                        <Typography variant={CONSTANTS.TITLE_VARIANT}>
                            About
                        </Typography>
                    </Indent>
                </Partition>
                <Space level={2}>
                    <Suggestions labels={['experience', 'education', 'home']}>
                        <Experience/>
                        <Education/>
                        <Home/>
                    </Suggestions>
                </Space>
            </Page>
        );
    }
}

export default withTheme(About);