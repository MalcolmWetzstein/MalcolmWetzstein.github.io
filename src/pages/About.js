import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { Typography, withTheme } from '@material-ui/core';
import { Page, Partition, Indent, Space, Suggestions } from '../components/Custom';
import { Home, Experience, Portfolio } from './Pages';
import * as CONSTANTS from '../Constants';

class About extends CustomComponent 
{
    static buttonText = "About Me";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Indent>
                        <Typography variant={CONSTANTS.TITLE_VARIANT}>
                            {About.buttonText}
                        </Typography>
                    </Indent>
                </Partition>
                <Space/>
                <Suggestions labels={['experience', 'portfolio', 'home']}>
                    <Experience/>
                    <Portfolio/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(About);