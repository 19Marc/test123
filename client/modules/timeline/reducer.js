// @flow
import moment from 'moment'
import { GET_GROUPS, GET_COORDS, CHANGE_COORDS } from './actionTypes'
import type { State, Action } from './types'

export const initialState: State = {
  coords: [
    {
      x: 0,
      y: 0,
    },
  ],
  list: [
    {
      id: 1,
      title: 'Marc Roscher',
      items: [
        {
          id: 1,
          group: 1,
          title: 'item 1',
          start_time: moment(),
          end_time: moment().add(1, 'hour'),
        },
      ],
    },
    {
      id: 2,
      title: 'Louis Raetz',
      items: [
        {
          id: 1,
          group: 1,
          title: 'item 1',
          start_time: moment(),
          end_time: moment().add(1, 'hour'),
        },
      ],
    },
    {
      id: 3,
      title: 'Dean Hidri',
      items: [
        {
          id: 1,
          group: 1,
          title: 'item 1',
          start_time: moment(),
          end_time: moment().add(1, 'hour'),
        },
      ],
    },
    {
      id: 4,
      title: 'Julian Herbst',
      items: [
        {
          id: 1,
          group: 1,
          title: 'item 1',
          start_time: moment(),
          end_time: moment().add(1, 'hour'),
        },
      ],
    },
    {
      id: 5,
      title: 'Markus Gavrilov',
      items: [
        {
          id: 1,
          group: 1,
          title: 'item 1',
          start_time: moment(),
          end_time: moment().add(1, 'hour'),
        },
      ],
    },
    {
      id: 6,
      title: 'Kevin Kalde',
      items: [
        {
          id: 1,
          group: 1,
          title: 'item 1',
          start_time: moment(),
          end_time: moment().add(1, 'hour'),
        },
      ],
    },
    {
      id: 7,
      title: 'Dominik Schmidt',
      items: [
        {
          id: 1,
          group: 1,
          title: 'item 1',
          start_time: moment(),
          end_time: moment().add(1, 'hour'),
        },
      ],
    },
    {
      id: 8,
      title: 'Niclas Ernst',
      items: [
        {
          id: 1,
          group: 1,
          title: 'item 1',
          start_time: moment(),
          end_time: moment().add(1, 'hour'),
        },
      ],
    },
    {
      id: 9,
      title: 'Chris Krüger',
      items: [
        {
          id: 1,
          group: 1,
          title: 'item 1',
          start_time: moment(),
          end_time: moment().add(1, 'hour'),
        },
      ],
    },
  ],
}

export const reducer = (state: State = initialState, { type, ...action }: Action): State => {
  switch (type) {
    case GET_GROUPS:
      return { ...state, list: action.payload ? [...state.list, action.payload] : state.list }
    case GET_COORDS:
      return { ...state, coords: action.payload ? [...state.coords, action.payload] : state.coords }
    case CHANGE_COORDS:
      return { ...state, coords: action.payload ? [...state.coords, action.payload] : state.coords }
    default:
      return state
  }
}
