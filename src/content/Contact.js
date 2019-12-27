import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';

import Page from '../components/Page';
import Partition from '../components/Partition';

class Contact extends React.Component 
{
    static buttonText = "Contact";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition>
                    <Typography>
                        Hello World
                    </Typography>
                </Partition>
            </Page>
        );
    }
}

export default withTheme(Contact);