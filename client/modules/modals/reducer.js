// @flow
import { SHOW_MODAL, HIDE_MODAL } from './actionTypes'
import type { State, Action } from './types'

export const initialState: State = {
  active: '',
}

export const reducer = (state: State = initialState, { type, ...action }: Action): State => {
  switch (type) {
    case SHOW_MODAL:
      return action.payload
    case HIDE_MODAL:
      return initialState
    default:
      return state
  }
}
