import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme } from '@material-ui/core';
import { Page, Partition, Title, Space, Suggestions } from '../components/Custom';
import { Home, Contact } from './Pages';

class Skills extends CustomComponent 
{
    static buttonText = "Skills";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Title>
                        {Skills.buttonText}
                    </Title>
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