// @flow
import React from "react";
import { Switch, Route } from "react-router-dom";

import { Header, Main } from './styles'

// SUBPAGES
import { Dashboard, Timeline } from "./subpages";

const Projects = ({ match }: *): React$Node => (
  <Main>
    <div className="col-12"><Header>Projects</Header></div>
    <Switch>
      <Route exact path={`${match.path}`} component={Dashboard} />
      <Route path={`${match.path}/timeline`} component={Timeline} />
    </Switch>
  </Main>
);

export default Projects;
