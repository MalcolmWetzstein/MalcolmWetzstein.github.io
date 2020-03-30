import React from 'react';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { PageDeque, NavigationBar, IconLink, Preloader } from './components';
import { Home, About, Portfolio, Education, Experience, Skills, Contact} from './pages';
import * as CONSTANTS from './Constants';
import * as themes from './themes';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

function App() 
{
  return (
    <ThemeProvider theme={useMediaQuery('(prefers-color-scheme: dark)') ? themes.DarkTheme : themes.LightTheme}>
      <CssBaseline/>
      <Preloader imageTree={CONSTANTS.IMAGES}/>
      <PageDeque>
        <NavigationBar
          homePage={<Home/>}
          links={[
            <IconLink href={CONSTANTS.LINKS.GITHUB}>
              <GitHubIcon/>
            </IconLink>,
            <IconLink href={CONSTANTS.LINKS.LINKEDIN}>
              <LinkedInIcon/>
            </IconLink>,
            <IconLink href={CONSTANTS.LINKS.RESUME}>
              <DescriptionIcon/>
            </IconLink>
          ]}
        >
          <About/>
          <Portfolio/>
          <Education/>
          <Experience/>
          <Skills/>
          <Contact/>
        </NavigationBar>
      </PageDeque>
    </ThemeProvider>
  );
}

export default App;