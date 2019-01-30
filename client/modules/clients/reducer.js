// @flow
import { CREATE_CLIENT, REMOVE_CLIENT, GET_CLIENTS, GET_PROJECTS } from './actionTypes'
import type { State, Action } from './types'

export const initialState: State = {
  list: [
    {
      id: 1,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/LetterF.svg/1200px-LetterF.svg.png',
      slug: 'flow',
      name: 'Flow',
      email: 'support@flow-fintory.com',
      color: '#0F5FE2',
      projects: [
        {
          id: 1,
          name: 'Website',
        },
      ],
    },
  ],
}

export const reducer = (state: State = initialState, { type, ...action }: Action): State => {
  switch (type) {
    case CREATE_CLIENT:
      return { ...state, list: action.payload ? [...state.list, action.payload] : state.list }
    case REMOVE_CLIENT:
      return { ...state, list: state.list.filter(client => client.id !== action.id) }
    case GET_CLIENTS:
      return { ...state, list: state.list }
    case GET_PROJECTS:
      return { ...state, list: state.list.projects }
    default:
      return state
  }
}
