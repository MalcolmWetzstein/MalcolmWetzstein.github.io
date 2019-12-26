import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';

import Page from '../components/Page';

class Home extends React.Component 
{
    static buttonText = "Home";
    
    render ()
    {
        return (
            <Page>
                <Typography align="center">
                    Personal Statement
                </Typography>
            </Page>
        );
    }
}

export default withTheme(Home);