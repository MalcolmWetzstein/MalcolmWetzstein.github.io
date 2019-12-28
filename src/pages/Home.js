import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { Typography, Link, withTheme } from '@material-ui/core';
import { Page, Partition, Suggestions } from '../components/Custom';
import { Contact } from './Pages';

class Home extends CustomComponent 
{
    static buttonText = "Home";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition>
                    <React.Fragment>
                        <Typography variant="h1" align="center" gutterBottom>
                            Malcolm<br/>
                            Xavier<br/>
                            Wetzstein
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            Recent Master Graduate in Computer Science
                        </Typography>
                    </React.Fragment>
                    <Suggestions labels={['linkedin', 'contact me']}>
                        <Link href='https://www.linkedin.com/in/malcolmwetzstein' target="_blank"/>
                        <Contact/>
                    </Suggestions>
                </Partition>
            </Page>
        );
    }
}

export default withTheme(Home);