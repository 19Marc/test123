// @flow
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// SUBPAGES
import { Dashboard, Timeline } from './subpages'

const Projects = ({ match }: *): React$Node => (
  <Switch>
    <Route exact path={`${match.path}`} component={Dashboard} />
    <Route path={`${match.path}/timeline`} component={Timeline} />
  </Switch>
)

export default Projects
