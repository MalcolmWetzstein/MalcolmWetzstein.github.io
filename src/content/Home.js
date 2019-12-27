import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withTheme } from '@material-ui/core/styles';

import Page from '../components/Page';
import Partition from '../components/Partition';
import Suggestions from '../components/Suggestions';
import Contact from './Contact';

class Home extends React.Component 
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
                        <Link href='https://www.linkedin.com/in/malcolmwetzstein'/>
                        <Contact/>
                    </Suggestions>
                </Partition>
            </Page>
        );
    }
}

export default withTheme(Home);