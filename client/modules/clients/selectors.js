// @flow
import type { State as RootState } from '../types'

/*
 * Select the tasks state from the whole redux state-tree
 */
export const getClients = (state: RootState) => state.clients
