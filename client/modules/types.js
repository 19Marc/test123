// @flow
import type { State as ClientState } from './clients/types'
import type { State as ModalState } from './modals/types'

export type State = {
  clients: ClientState,
  modal: ModalState,
  // router: *,
}

export type Action = {
  type: string,
  [key: string]: Object | string,
}
