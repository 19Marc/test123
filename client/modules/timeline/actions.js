// @flow
import uuid from 'utils/uuid'
import { GET_GROUPS, GET_COORDS, CHANGE_COORDS } from './actionTypes'
import type { Action } from './types'

export function getGroups(id: string, title: string, items: Array<*>): Action {
  return { type: GET_GROUPS, payload: { id, title, items } }
}

export function getCoords(x: *, y: *): Action {
  return { type: GET_COORDS, payload: { x, y } }
}

export function changeCoords(x: *, y: *): Action {
  return { type: CHANGE_COORDS, payload: { x, y } }
}
