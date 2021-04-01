import React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import Other from "../pages/index/index";
import Login from '../pages/activity/index';
import { createHashHistory } from "history";

const hashHistory = createHashHistory();
 
function Router() {
  return (
    <HashRouter history={hashHistory}>
        <Route exact path="/" component={Login} />
        <Route exact path="/other" component={Other} />
    </HashRouter>
  );
}
 
export default Router;