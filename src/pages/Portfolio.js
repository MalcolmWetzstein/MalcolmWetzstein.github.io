import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { withTheme, Typography, List, ListItem, ListItemText, Paper, Card, Grid, CardContent, Container } from '@material-ui/core';
import { Page, Partition, Space, Suggestions, Categories, Title, ImageGrid } from '../components/Custom';
import { Home, Skills, Courses } from './Pages';
import * as CONSTANTS from '../Constants';

const TECHNICAL = [
    ['StarLogo Nova', CONSTANTS.IMAGES.PORTFOLIO.STARLOGO.THUMB],
    ['Surface Fluid Flow', CONSTANTS.IMAGES.PORTFOLIO.SURFACE_FLUID.THUMB],
    ['Adaptive Manifolds Filter', CONSTANTS.IMAGES.PORTFOLIO.MANIFOLDS_FILTER.THUMB]
];

const CREATIVE = [
    ['Augmented Reality Game', CONSTANTS.IMAGES.PORTFOLIO.AR_GAME.THUMB],
    ['Personal Website', CONSTANTS.IMAGES.PORTFOLIO.WEBSITE.THUMB],
    ['3D Modeling & Rendering', CONSTANTS.IMAGES.PORTFOLIO.PAVILLION.THUMB],
    ['Architectural Models', CONSTANTS.IMAGES.PORTFOLIO.INTRO_ARCH.THUMB],
    ['Music', CONSTANTS.IMAGES.PORTFOLIO.MUSIC.THUMB]
];

function labels(portfolio) {
    return portfolio.map(entry => entry[0]);
}

function images(portfolio) {
    return portfolio.map(entry => entry[1]);
}

class Portfolio extends CustomComponent 
{
    static buttonText = "Portfolio";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center maxWidth='xl'>
                    <Title>
                        {Portfolio.buttonText}
                    </Title>
                    <Container maxWidth='xl'>
                        <Categories fullWidth labels={['technical', 'creative']}>
                            {/* Technical */}
                            <ImageGrid 
                                images={images(TECHNICAL)}
                                labels={labels(TECHNICAL)}
                                imageWidth='200px'
                                imageHeight='200px'
                                onClick={() => () => null}
                            />

                            {/* Creative */}
                            <ImageGrid
                                images={images(CREATIVE)}
                                labels={labels(CREATIVE)}
                                imageWidth='200px'
                                imageHeight='200px'
                                onClick={() => () => null}
                            />
                        </Categories>
                    </Container>
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