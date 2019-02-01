// @flow
import { GET_PROJECTS, CREATE_PROJECTS } from './actionTypes'
import type { State, Action } from './types'

export const initialState: State = {
  list: [
    {
      id: 1,
      clientId: 1,
      name: 'Website',
      description:
        'This is a short description text for the project Website. Feel free to edit me on the right side.',
    },
    {
      id: 2,
      clientId: 1,
      name: 'Calendar',
      description:
        'This is a short description text for the project Calendar. Feel free to edit me on the right side.',
    },
  ],
}

export const reducer = (state: State = initialState, { type, ...action }: Action): State => {
  switch (type) {
    case CREATE_PROJECTS:
      return { ...state, list: action.payload ? [...state.list, action.payload] : state.list }
    case GET_PROJECTS:
      return { ...state, list: action.payload ? [...state.list, action.payload] : state.list }
    default:
      return state
  }
}
