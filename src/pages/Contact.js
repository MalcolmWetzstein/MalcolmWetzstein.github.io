import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { Typography, Link, withTheme } from '@material-ui/core';
import { Page, Partition, Indent, Columns, Suggestions, Group, Space } from '../components/Custom';
import { Home } from './Pages';
import * as CONSTANTS from '../Constants';

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Contact extends CustomComponent
{
    static buttonText = "Contact";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition center>
                    <Indent>
                        <Typography variant={CONSTANTS.TITLE_VARIANT}>
                            Contact
                        </Typography>
                    </Indent>
                    <Group>
                        <Indent level={2}>
                            <Columns>
                                <Group>
                                    <Typography variant="h4" gutterBottom>
                                        <EmailIcon fontSize='inherit'/>
                                    </Typography>
                                    <Typography variant="h4" gutterBottom>
                                        <PhoneIcon fontSize='inherit'/>
                                    </Typography>
                                    <Typography variant="h4" gutterBottom>
                                        <LinkedInIcon fontSize='inherit'/>
                                    </Typography>
                                </Group>
                                <Group>
                                    <Link href={"mailto:" + CONSTANTS.EMAIL_ADDRESS} target="_blank" color="secondary">
                                        <Typography variant="h4" gutterBottom>
                                            {CONSTANTS.EMAIL_ADDRESS}
                                        </Typography>
                                    </Link>
                                    <Link href={"tel:" + CONSTANTS.PHONE_NUMBER} target="_blank" color="secondary">
                                        <Typography variant="h4" gutterBottom>
                                            {this.readablePhoneNumber(CONSTANTS.PHONE_NUMBER)}
                                        </Typography>
                                    </Link>
                                    <Link href={CONSTANTS.LINKS.LINKEDIN} target="_blank" color="secondary">
                                        <Typography variant="h4" gutterBottom>
                                            {CONSTANTS.LINKS.LINKEDIN}
                                        </Typography>
                                    </Link>
                                </Group>
                            </Columns>
                        </Indent>
                    </Group>
                </Partition>
                <Space level={1.5}>
                    <Suggestions labels={['home']}>
                        <Home/>
                    </Suggestions>
                </Space>
            </Page>
        );
    }

    readablePhoneNumber(phoneNumber)
    {
        return '(' + phoneNumber.slice(0,3) + ')' + phoneNumber.slice(3,6) + '-' + phoneNumber.slice(6);
    }
}

export default withTheme(Contact);