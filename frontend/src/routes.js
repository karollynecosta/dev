import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Unform from './pages/rocketseat-unfom';
import Css from './pages/cssTrigger';
import Dev from './pages/dev';
import Teste from './pages/teste';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Unform} />
        <Route path="/css" component={Css} />
        <Route path="/testes" component={Teste} />

        <Route path="/dev" component={Dev} />
      </Switch>
    </BrowserRouter>
  );
}
