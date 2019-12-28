import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PageDeque from './components/PageDeque';
import NavigationBar from './components/NavigationBar';
import * as themes from './themes/Themes';
import * as pages from './pages/Pages';

function App() 
{
  return (
    <ThemeProvider theme={useMediaQuery('(prefers-color-scheme: dark)') ? themes.DarkTheme : themes.LightTheme}>
      <CssBaseline/>
      <PageDeque>
        <NavigationBar>
          <pages.Home/>
          <pages.Education/>
          <pages.Contact/>
        </NavigationBar>
      </PageDeque>
    </ThemeProvider>
  );
}

export default App;