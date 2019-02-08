// @flow
import moment from 'moment'
import { GET_ITEMS } from './actionTypes'
import type { State, Action } from './types'

export const initialState: State = {
  list: [
    {
      id: 1,
      group: 1,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 2,
      group: 2,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 3,
      group: 3,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 4,
      group: 4,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 5,
      group: 5,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 6,
      group: 6,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 7,
      group: 7,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 8,
      group: 8,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 9,
      group: 9,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
  ],
}

export const reducer = (state: State = initialState, { type, ...action }: Action): State => {
  switch (type) {
    case GET_ITEMS:
      return { ...state, list: action.payload ? [...state.list, action.payload] : state.list }
    default:
      return state
  }
}
