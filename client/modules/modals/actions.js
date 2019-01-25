// @flow
import { SHOW_MODAL, HIDE_MODAL } from './actionTypes'
import type { Action } from './types'

export function showModal(name: string, ...props: *): Action {
  return { type: SHOW_MODAL, payload: { active: name, ...props[0] } }
}

export function hideModal(): Action {
  return { type: HIDE_MODAL }
}
