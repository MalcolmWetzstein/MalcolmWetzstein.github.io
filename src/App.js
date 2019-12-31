import React from 'react';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { PageDeque, NavigationBar, IconLink } from './components/Custom';
import * as CONSTANTS from './Constants';
import * as themes from './themes/Themes';
import * as pages from './pages/Pages';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

function App() 
{
  return (
    <ThemeProvider theme={useMediaQuery('(prefers-color-scheme: dark)') ? themes.DarkTheme : themes.LightTheme}>
      <CssBaseline/>
      <PageDeque>
        <NavigationBar links={[
          <IconLink href={CONSTANTS.LINKS.LINKEDIN}>
            <LinkedInIcon/>
          </IconLink>,
          <IconLink href={CONSTANTS.LINKS.GITHUB}>
            <GitHubIcon/>
          </IconLink>,
          <IconLink href={CONSTANTS.LINKS.RESUME}>
            <DescriptionIcon/>
          </IconLink>
        ]}>
          <pages.Home/>
          <pages.About/>
          <pages.Experience/>
          <pages.Education/>
          <pages.Courses/>
          <pages.Projects/>
          <pages.Skills/>
          <pages.Contact/>
        </NavigationBar>
      </PageDeque>
    </ThemeProvider>
  );
}

export default App;