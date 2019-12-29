import React from 'react';
import { CssBaseline, ThemeProvider, useMediaQuery, ButtonBase, Box } from '@material-ui/core';
import { PageDeque, NavigationBar } from './components/Custom';
import * as CONSTANTS from './Constants';
import * as themes from './themes/Themes';
import * as pages from './pages/Pages';

import DescriptionIcon from '@material-ui/icons/Description';

function App() 
{
  return (
    <ThemeProvider theme={useMediaQuery('(prefers-color-scheme: dark)') ? themes.DarkTheme : themes.LightTheme}>
      <CssBaseline/>
      <PageDeque>
        <NavigationBar links={[
          <ButtonBase href={CONSTANTS.LINKS.LINKEDIN} target='_blank'>
            <img src={CONSTANTS.ICONS.LINKEDIN.WHITE} alt='in' width='32px' height='32px'/>
          </ButtonBase>,
          <Box margin={themes.LightTheme.spacing(0, 0.5, 0, 1)}>
            <ButtonBase href={CONSTANTS.LINKS.GITHUB} target='_blank'>
              <img src={CONSTANTS.ICONS.GITHUB.WHITE} alt='git'/>
            </ButtonBase>
          </Box>,
          <ButtonBase href={CONSTANTS.LINKS.RESUME} target='_blank'>
            <DescriptionIcon fontSize='large'/>
          </ButtonBase>
        ]}>
          <pages.Home/>
          <pages.Education/>
          <pages.Contact/>
        </NavigationBar>
      </PageDeque>
    </ThemeProvider>
  );
}

export default App;