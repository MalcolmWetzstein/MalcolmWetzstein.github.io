import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { PageDeque, NavigationBar, IconLink, Preloader } from './components';
import { Home, About, Portfolio, Education, Experience, Skills} from './pages';
import Themes from './themes/Themes';
import * as CONSTANTS from './Constants';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

function App() 
{
  return (
    <ThemeProvider theme={Themes.Teal}>
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
            <IconLink href={CONSTANTS.DOCUMENTS.RESUME}>
              <DescriptionIcon/>
            </IconLink>
          ]}
        >
          <About/>
          <Portfolio/>
          <Education/>
          <Experience/>
          <Skills/>
        </NavigationBar>
      </PageDeque>
    </ThemeProvider>
  );
}

export default App;