import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography, List, ListItem, ListItemText, Paper, Card, Grid, CardContent } from '@material-ui/core';
import { Page, Partition, Space, Suggestions, Categories, Title } from '../components/Custom';
import { Home, Skills, Courses } from './Pages';

class Portfolio extends CustomComponent 
{
    static buttonText = "Portfolio";

    constructor(props)
    {
        super(props);

        this.defaultProject = (<ProjectInfo text='Choose a Project'/>);

        this.state = {
            currentProject: this.defaultProject
        };
    }
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center maxWidth='xl'>
                    <Title>
                        {Portfolio.buttonText}
                    </Title>
                    <Grid container justify='space-around'>
                        <Grid item xs={3}>
                            <Categories labels={['research', 'projects', 'art & design']}>
                                {/* Research */}
                                <ProjectList labels={['Master\'s Thesis', 'Fluid Flow']}>
                                    <ProjectInfo/>
                                    <ProjectInfo/>
                                </ProjectList>

                                {/* Projects */}
                                <ProjectList labels={['Augmented Reality Game', 'Adaptive Manifolds Filter', 'Personal Website']}>
                                    <ProjectInfo/>
                                    <ProjectInfo/>
                                    <ProjectInfo/>
                                </ProjectList>

                                {/* Art & Design */}
                                <ProjectList labels={['Architectural Models', '3D Modeling', 'Music']}>
                                    <ProjectInfo/>
                                    <ProjectInfo/>
                                    <ProjectInfo/>
                                </ProjectList>
                            </Categories>
                        </Grid>
                        <Grid item xs={8}>
                            {this.state.currentProject}
                        </Grid>
                    </Grid>
                </Partition>
                <Space/>
                <Suggestions labels={['courses', 'skills', 'home']}>
                    <Courses/>
                    <Skills/>
                    <Home/>
                </Suggestions>
            </Page>
        );
    }
}

class ProjectList extends CustomComponent
{
    render()
    {
        return (
            <Paper square>
                <List>
                    {
                        this.props.labels.map(label => 
                            <ListItem button>
                                <ListItemText>
                                    <Typography variant='h6'>
                                        {label} 
                                    </Typography>
                                </ListItemText>
                            </ListItem>)
                    }
                </List>
            </Paper>
        );
    }
}

class ProjectInfo extends CustomComponent
{
    render()
    {
        return (
            <Card>
                <CardContent>
                    {this.props.text}
                </CardContent>
            </Card>
        );
    }
}

export default withTheme(Portfolio);