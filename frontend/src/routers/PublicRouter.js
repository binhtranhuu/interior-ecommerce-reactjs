import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../App';
import HomeScreen from '../screens/HomeScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

function PublicRouter(props) {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="*" component={NotFoundScreen} />
      </Switch>
    </Layout>
  );
}

export default PublicRouter;
