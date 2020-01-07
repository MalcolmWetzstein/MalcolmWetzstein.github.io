import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography } from '@material-ui/core';
import { Page, Partition, Indent, Space, Suggestions } from '../components/Custom';
import { Home, Contact } from './Pages';
import * as CONSTANTS from '../Constants';

class Skills extends CustomComponent 
{
    static buttonText = "Skills";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Indent>
                        <Typography variant={CONSTANTS.TITLE_VARIANT}>
                            {Skills.buttonText}
                        </Typography>
                    </Indent>
                </Partition>
                <Space/>
                <Suggestions labels={['contact me', 'home']}>
                    <Contact/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(Skills);