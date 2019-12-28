import React from 'react';
import CustomComponent from '../components/CustomComponent';
import { Typography, Link, withTheme } from '@material-ui/core';
import { Page, Partition, Indent, Columns, Suggestions } from '../components/Custom';
import { Home } from './Pages';

const EMAIL_ADDRESS = 'mxw002@gmail.com';
const PHONE_NUMBER = '8082182723';
const LINKEDIN = 'https://www.linkedin.com/in/malcolmwetzstein';

class Contact extends CustomComponent 
{
    static buttonText = "Contact";
    
    render ()
    {
        return (
            <Page pageDeque={this.props.pageDeque}>
                <Partition>
                    <Indent>
                        <Typography variant="h2">
                            Contact
                        </Typography>
                    </Indent>
                    <Indent level={2}>
                        <Columns>
                            <React.Fragment>
                                <Typography variant="h4" gutterBottom>
                                    Email
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                    Phone
                                </Typography>
                                <Typography variant="h4" gutterBottom>
                                    LinkedIn
                                </Typography>
                            </React.Fragment>
                            <React.Fragment>
                                <Link href={"mailto:" + EMAIL_ADDRESS} target="_blank" color="secondary">
                                    <Typography variant="h4" gutterBottom>
                                        {EMAIL_ADDRESS}
                                    </Typography>
                                </Link>
                                <Link href={"tel:" + PHONE_NUMBER} target="_blank" color="secondary">
                                    <Typography variant="h4" gutterBottom>
                                        {this.readablePhoneNumber(PHONE_NUMBER)}
                                    </Typography>
                                </Link>
                                <Link href={LINKEDIN} target="_blank" color="secondary">
                                    <Typography variant="h4" gutterBottom>
                                        {LINKEDIN}
                                    </Typography>
                                </Link>
                            </React.Fragment>
                        </Columns>
                    </Indent>
                    <Suggestions labels={['Home']}>
                        <Home/>
                    </Suggestions>
                </Partition>
            </Page>
        );
    }

    readablePhoneNumber(phoneNumber)
    {
        return phoneNumber.slice(0,3) + '-' + phoneNumber.slice(3,6) + '-' + phoneNumber.slice(6);
    }
}

export default withTheme(Contact);