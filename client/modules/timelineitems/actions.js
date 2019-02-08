// @flow
import { GET_ITEMS } from './actionTypes'
import type { Action } from './types'

export function getItems(id: string, title: string, items: Array<*>): Action {
  return { type: GET_ITEMS, payload: { id, title, items } }
}
