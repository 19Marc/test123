// @flow
export type Action = {
  type: string,
  id?: string,
  payload?: *,
}

export type State = {
  active: string,
}
