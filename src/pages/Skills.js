import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme } from '@material-ui/core';
import { Page } from '../components/Custom';
import * as CONSTANTS from '../Constants';

class Skills extends CustomComponent 
{
    static buttonText = "Skills";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
            </Page>
        );
    }
}

export default withTheme(Skills);