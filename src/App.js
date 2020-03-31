import React from 'react';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { PageDeque, NavigationBar, IconLink, Preloader } from './components';
import { Home, About, Portfolio, Education, Experience, Skills, Contact} from './pages';
import { LightThemes, DarkThemes } from './themes';
import * as CONSTANTS from './Constants';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

const lightTheme = LightThemes.Blue;
const darkTheme = DarkThemes.Indigo;

function App() 
{
  let theme = useMediaQuery('(prefers-color-scheme: dark)') ? darkTheme : lightTheme;
  if (process.env.REACT_APP_THEME === 'light')
    theme = lightTheme;
  else if (process.env.REACT_APP_THEME === 'dark')
    theme = darkTheme;

  return (
    <ThemeProvider theme={theme}>
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