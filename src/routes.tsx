import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageHeader from './components/PageHeader';
import Landing from './pages/Landing';
import PageFooter from './components/PageFooter';

function Routes() {
  return (
    <BrowserRouter>
      <PageHeader />

      <Route path="/" exact component={Landing} />

      <PageFooter />
    </BrowserRouter>
  );
}

export default Routes;