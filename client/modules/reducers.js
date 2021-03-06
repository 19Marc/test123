// @flow
import { combineReducers } from 'redux'
import type { CombinedReducer } from 'redux'

import { reducer as formReducer } from 'redux-form'
import { reducer as clientReducer } from './clients'
import { reducer as projectReducer } from './projects'
import { reducer as modalReducer } from './modals'
import { reducer as timelineReducer } from './timeline'
import { reducer as timelineitemsReducer } from './timelineitems'

import type { Action } from './types'

export const rootReducer: CombinedReducer<any, Action> = combineReducers({
  form: formReducer,
  modals: modalReducer,
  clients: clientReducer,
  projects: projectReducer,
  timeline: timelineReducer,
  timelineitems: timelineitemsReducer,
})
