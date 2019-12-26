import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import PageDeque from './components/PageDeque';
import NavigationBar from './components/NavigationBar';
import * as themes from './themes/Themes';
import * as content from './content/Content';

function App() 
{
  return (
    <React.Fragment>
      <CssBaseline/>
      <ThemeProvider theme={themes.LightTheme}>
        <PageDeque>
          <NavigationBar>
            <content.Home/>
            <content.Education/>
            <content.Contact/>
          </NavigationBar>
        </PageDeque>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;