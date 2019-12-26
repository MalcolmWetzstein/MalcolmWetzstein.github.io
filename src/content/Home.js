import React from 'react';
import Typography from '@material-ui/core/Typography';

import Page from '../components/Page';

export default class Home extends React.Component 
{
    static displayName = "Home";
    
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