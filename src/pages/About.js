import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme } from '@material-ui/core';
import { Page, Partition, Space, Suggestions, Title } from '../components/Custom';
import { Home, Experience, Portfolio } from './Pages';

class About extends CustomComponent 
{
    static buttonText = "About Me";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Title>
                        {About.buttonText}
                    </Title>
                </Partition>
                <Space/>
                <Suggestions labels={['portfolio', 'experience', 'home']}>
                    <Portfolio/>
                    <Experience/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(About);