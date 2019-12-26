import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';

import Page from '../components/Page';
import Partition from '../components/Partition';

class Home extends React.Component 
{
    static buttonText = "Home";
    
    render ()
    {
        return (
            <Page>
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
                    <React.Fragment>
                        <Typography variant="h2" gutterBottom>
                            Personal Statement
                        </Typography>
                        <Typography variant="body1">
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                        </Typography>
                    </React.Fragment>
                    <React.Fragment>
                        <Button>
                            Learn More
                        </Button>
                    </React.Fragment>
                </Partition>
            </Page>
        );
    }
}

export default withTheme(Home);