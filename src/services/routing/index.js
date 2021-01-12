import React from 'react';
import Home from '../../pages/Home';
import ImgView from '../../pages/ImgView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../components/ui/theme';
import SearchProvider from '../../hooks/context/SearchContext';
import ImageDetailsProvider from '../../hooks/context/ImageDetailsContext';

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <SearchProvider>
        <ImageDetailsProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/image/:id" exact component={ImgView} />
            </Switch>
          </Router>
        </ImageDetailsProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default AppRouter;