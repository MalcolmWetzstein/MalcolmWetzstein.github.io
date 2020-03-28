import React from 'react';
import { withTheme, Typography } from '@material-ui/core';
import { CustomComponent, Page, PageHeader, Suggestions, Space } from '../../components';
import { Portfolio } from '..';
import { PageDequePropType, NoChildrenPropType } from '../../components/Util';
import * as CONSTANTS from '../../Constants';

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
                <Suggestions labels={[CONSTANTS.BACK_BUTTON_TEXT]}>
                    <Portfolio/>
                </Suggestions>
            </Page>
        );
    }
}

Music.propTypes = {
    pageDeque: PageDequePropType.isRequired,
    children: NoChildrenPropType
};

export default withTheme(Music);