import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography } from '@material-ui/core';
import { Page, Title, Space, Suggestions } from '../components/Custom';
import { Home, Contact } from './Pages';

class Skills extends CustomComponent 
{
    static buttonText = "Skills";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Title>
                    {Skills.buttonText}
                </Title>
                <Space size='lg'/>
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