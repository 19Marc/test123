// @flow
import uuid from 'utils/uuid'
import { CREATE_CLIENT, REMOVE_CLIENT, GET_CLIENTS } from './actionTypes'
import type { Action } from './types'

export function createClient(image: string, name: string, email: string, color: string): Action {
  const id: string = uuid()

  return { type: CREATE_CLIENT, payload: { id, image, name, email, color } }
}

export function removeClient(id: string): Action {
  return { type: REMOVE_CLIENT, id }
}

export function getClients(
  id: string,
  image: string,
  name: string,
  email: string,
  color: string
): Action {
  return { type: GET_CLIENTS, payload: { id, image, name, email, color } }
}
