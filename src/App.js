import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';

import { DarkTheme } from './themes/DarkTheme';
import PageDeque from './components/PageDeque';
import NavigationBar from './components/NavigationBar';
import NavigationButton from './components/NavigationButton';

function App() 
{
  return (
    <React.Fragment>
      <CssBaseline/>
      <ThemeProvider theme={DarkTheme}>
        <PageDeque>
          <NavigationBar>
            <NavigationButton clear={true}>
              Home
            </NavigationButton>
          </NavigationBar>
        </PageDeque>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
