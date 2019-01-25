// @flow
export type Client = {
  id: number | string,
  image: string,
  name: string,
  email: string,
  color: string,
}

export type Action = {
  type: string,
  id?: string,
  payload?: Client,
}

export type State = {
  list: Array<Client>,
}
