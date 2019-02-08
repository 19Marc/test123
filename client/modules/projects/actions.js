// @flow
import uuid from 'utils/uuid'
import { GET_PROJECTS, CREATE_PROJECTS, REMOVE_PROJECTS } from './actionTypes'
import type { Action } from './types'

export function getProjects(id: string, name: string, description: string): Action {
  return { type: GET_PROJECTS, payload: { id, name, description } }
}

export function createProject(clientId: number, name: string, description: string): Action {
  const id: string = uuid()

  return {
    type: CREATE_PROJECTS,
    payload: { id, clientId, name, description },
  }
}

export function removeProject(id: string): Action {
  return { type: REMOVE_PROJECTS, id }
}
