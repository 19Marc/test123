// @flow
export type Projects = {
  id: number | string,
  group: number | string,
  title: string,
  x: *,
  y: *,
}

export type Action = {
  type: string,
  payload?: *,
}

export type State = {
  list: Array<Projects>,
  coords: Array<Projects>,
}
