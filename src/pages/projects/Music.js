import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme, Typography } from '@material-ui/core';
import { Page, Title, Suggestions, Space } from '../../components/Custom';
import { Portfolio } from '../Pages';

class Music extends CustomComponent {
    render() {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Title>
                    Music Compositions
                </Title>
                <Space size='lg'/>
                <Typography align='center'>
                    Coming Soon...
                </Typography>
                <Space size='lg'/>
                <Suggestions labels={['back']}>
                    <Portfolio/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(Music);