import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';

import { MainTheme } from './themes/MainTheme';
import Controller from './components/Controller';

function App() 
{
  return (
    <React.Fragment>
      <CssBaseline/>
      <ThemeProvider theme={MainTheme}>
        <Controller/>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
