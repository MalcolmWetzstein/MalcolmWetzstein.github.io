import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, Typography } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space } from '../../components';
import { Portfolio } from '..';
import { PageDequePropType } from '../../components/Util';

class Music extends CustomComponent
{
    render()
    {
        return (
            <Page
                id='music'
                pageDeque={this.props.pageDeque}
            >
                <PageHeader>
                    Music Compositions
                </PageHeader>
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

Music.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: PropTypes.oneOf([undefined, null])
};

export default withTheme(Music);