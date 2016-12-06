import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Landing from './components/landing';
import SequenceList from './components/sequence_list';
import SequenceShow from './components/sequence_show';
import SequenceStart from './components/sequence_start';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="breathers" component={SequenceList} />
    <Route path="breathers/:id" component={SequenceShow} />
    <Route path=":id/breathe" component={SequenceStart} />
  </Route>
)
