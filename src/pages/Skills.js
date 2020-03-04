import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography } from '@material-ui/core';
import { Page, PageHeader, Space, Suggestions } from '../components/Custom';
import { Home, Contact } from './Pages';

class Skills extends CustomComponent 
{
    static buttonText = "Skills";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <PageHeader>
                    {Skills.buttonText}
                </PageHeader>
                <Typography align='center'>
                    Under Construction...
                </Typography>
                <Space size='lg'/>
                <Suggestions labels={['contact me', 'home']}>
                    <Contact/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(Skills);