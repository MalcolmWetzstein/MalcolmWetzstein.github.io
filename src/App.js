import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';

import { MainTheme } from './themes/MainTheme';
import PageDeque from './components/PageDeque';
import NavigationBar from './components/NavigationBar';

function App() 
{
  return (
    <React.Fragment>
      <CssBaseline/>
      <ThemeProvider theme={MainTheme}>
        <PageDeque>
          <NavigationBar/>
        </PageDeque>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
