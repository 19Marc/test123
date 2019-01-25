// @flow
import { CREATE_CLIENT, REMOVE_CLIENT, GET_CLIENTS } from './actionTypes'
import type { State, Action } from './types'

export const initialState: State = {
  list: [
    {
      id: 1,
      image: 'https://uinames.com/api/photos/male/10.jpg',
      name: 'Edward Holmes',
      email: 'edward94@example.com',
      color: '#FA198B',
      projects: [
        {
          id: 1,
          name: 'Kekse kaufen',
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
    default:
      return state
  }
}
