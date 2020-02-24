import React from 'react';
import CustomComponent from '../../components/CustomComponent';
import { withTheme, Typography } from '@material-ui/core';
import { Page, Title, Suggestions, Space } from '../../components/Custom';
import { Portfolio } from '../Pages';

class StarLogo extends CustomComponent {
    render() {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Title>
                    Master Thesis: <i>Custom and Interactive Environments in StarLogo Nova for Computational Modeling</i>
                </Title>
                <Space/>
                <Typography>
                    Coming Soon...
                </Typography>
                <Space/>
                <Suggestions labels={['back']}>
                    <Portfolio/>
                </Suggestions>
            </Page>
        );
    }
}

export default withTheme(StarLogo);