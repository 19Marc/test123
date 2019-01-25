// @flow
import { combineReducers } from 'redux'
import type { CombinedReducer } from 'redux'

import { reducer as clientReducer } from './clients'
import { reducer as modalReducer } from './modals'

import type { Action } from './types'

export const rootReducer: CombinedReducer<any, Action> = combineReducers({
  clients: clientReducer,
  modals: modalReducer,
})
