import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Unform from './pages/rocketseat-unfom';
import Css from './pages/cssTrigger';
import Dev from './pages/dev';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Unform} />
        <Route path="/css" component={Css} />
        <Route path="/dev" component={Dev} />
      </Switch>
    </BrowserRouter>
  );
}
