// @flow
import type { State as ClientState } from './clients/types'
import type { State as ModalState } from './modals/types'
import type { State as ProjectState } from './projects/types'

export type State = {
  clients: ClientState,
  modal: ModalState,
  projects: ProjectState,
  // router: *,
}

export type Action = {
  type: string,
  [key: string]: Object | string,
}
