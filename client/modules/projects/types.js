// @flow
export type Projects = {
  id: number | string,
  clientId: number | string,
  name: string,
}

export type Action = {
  type: string,
  payload?: *,
}

export type State = {
  list: Array<Projects>,
}
