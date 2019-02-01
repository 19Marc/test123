// @flow
import { createSelector } from 'reselect'
import filter from 'lodash/filter'
import find from 'lodash/find'

import { getProjects } from 'modules/projects/selectors'

import type { State as RootState } from '../types'

export const getClients = (state: RootState) => state.clients
export const getSlug = (state: RootState, ownProps: *) => ownProps.match.params.slug

// $FlowFixMe
export const getCurrentClient = createSelector(
  getClients,
  getSlug,
  (clients, slug) => find(clients.list, { slug })
)

// $FlowFixMe
export const getCurrentClientWithProjects = createSelector(
  getCurrentClient,
  getProjects,
  (client: *, projects: *): * => ({
    ...client,
    projects: filter(projects.list, { clientId: client.id }),
  })
)
