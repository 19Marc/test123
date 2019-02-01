// @flow
import React, { Component } from 'react'
import find from 'lodash/find'
import { Switch, Route } from 'react-router-dom'

import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import withCurrentClient from 'constants/decorators/withCurrentClient'
import { getClients } from 'modules/clients/actions'

import type { Props } from './types'
import { Subheader, Main, Header, Line, Wrapper, Title, Test } from './styles'

// SUBPAGES
import { Dashboard, Timeline } from './subpages'

const Projects = (props): React$Element<'div'> => {
  const { currentClient, match } = props
  if (!currentClient) return <div>Not found</div>

  return (
    <Main>
      <div className="col-12">
        <Test>
          <Wrapper>
            <Subheader>{currentClient.name}</Subheader>
            <Header>/ Projects</Header>
          </Wrapper>
          <Title>Projects</Title>
        </Test>
      </div>
      <Line />
      <Switch>
        <Route exact path={match.path} component={Dashboard} />
        <Route path={`${match.path}/timeline`} component={Timeline} />
      </Switch>
    </Main>
  )
  // }            to = {`client/${slugify(name, { lower: true })}/projects`}
}

// $FlowFixMe
export default withCurrentClient(Projects)
