// @flow
import uuid from 'utils/uuid'
import slugify from 'slugify'
import { CREATE_CLIENT, REMOVE_CLIENT, GET_CLIENTS, GET_PROJECTS } from './actionTypes'
import type { Action } from './types'

export function createClient(image: string, name: string, email: string, color: string): Action {
  const id: string = uuid()
  const slug: string = slugify(name, { lower: true })

  return {
    type: CREATE_CLIENT,
    payload: { id, image, name, email, color, projects: [name, id], slug },
  }
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

export function getProjects(id: string, name: string): Action {
  return { type: GET_PROJECTS, payload: { id, name } }
}
