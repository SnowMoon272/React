// Librarys
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// // Components
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from './Layout';
import NotFound from '../pages/NotFound';
import Origin from '../pages/Origin';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/origin" component={Origin} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Layout>
  )
}

export default App;
