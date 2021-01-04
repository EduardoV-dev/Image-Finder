import React from 'react';
import Home from '../pages/Home';
import ImgView from '../pages/ImgView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/image/:id" exact component={ImgView} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default AppRouter;