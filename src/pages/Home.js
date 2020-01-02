import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { Typography, Link, withTheme } from '@material-ui/core';
import { Page, Partition, Suggestions, Group, Space } from '../components/Custom';
import { About } from './Pages';
import * as CONSTANTS from '../Constants';

import DescriptionIcon from '@material-ui/icons/Description';

class Home extends CustomComponent 
{
    static buttonText = "Home";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Group>
                        <Typography variant="h1" align="center" gutterBottom>
                            Malcolm<br/>
                            Xavier<br/>
                            Wetzstein
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            Recent Master Graduate in Computer Science
                        </Typography>
                        <Space level={1/3}/>
                    </Group>
                    <Suggestions labels={['about me', 'resume', 'more']} icons={[null, <DescriptionIcon/>, null]}>
                        <About/>
                        <Link href={CONSTANTS.LINKS.RESUME} download/>
                        <Link href='#'/>
                    </Suggestions>
                </Partition>
            </Page>
        );
    }
}

export default withTheme(Home);